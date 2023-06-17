import { useMemo } from "react";

import { Theme, useTheme } from "@mui/material";
import _merge from "lodash/merge";

import ChartWrapper from "../ChartWrapper";
import { type EChartsOption } from "echarts";
import { tooltipItemMaker, tooltipWrapper } from "./utils";

const DEFAULT_CHART_HEIGHT = 360;

export const commonOption = (
  theme: Theme,
  category: string[]
): EChartsOption => {
  return {
    grid: {
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: category,
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: theme.palette.neutral[5],
        },
      },
      axisLabel: {
        color: theme.palette.text[1],
        margin: 16,
        fontSize: 10,
        lineHeight: 12,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true,
        lineStyle: {
          color: theme.palette.neutral[5],
        },
      },
      axisLabel: {
        color: theme.palette.text[1],
        fontSize: 10,
        lineHeight: 12,
      },
      splitLine: {
        lineStyle: {
          color: theme.palette.neutral[5],
        },
      },
    },
    tooltip: {
      show: true,
      triggerOn: "mousemove",
      enterable: true,
      appendToBody: true,
      showDelay: 1,
      padding: [8, 12],
      borderRadius: 10,
      extraCssText: `box-shadow: ${theme.shadows[1]};border:0;`,
      textStyle: {
        fontFamily: "Nunito Sans",
      },
    },
    color: theme.palette.primary[4],
  };
};

export const normalOption = (
  theme: Theme,
  title: string,
  series: Series[]
): EChartsOption => {
  return {
    grid: {
      ...(series.length > 1 && { right: 145 }),
    },
    series: series.map((set) => ({
      name: set.name,
      data: set.data,
      type: "line",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      //symbol: 'circle',
      symbolSize: 6,
      showSymbol: false,
      triggerLineEvent: true,
    })),
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        snap: true,
        lineStyle: {
          color: theme.palette.neutral[3],
          type: [1, 3],
          cap: "round",
        },
      },
      formatter: (params) => {
        if (!Array.isArray(params)) return "";
        const { name } = params[0];
        const content = params.map(({ color, seriesName, value }) =>
          tooltipItemMaker(
            theme,
            color?.toString() ?? "",
            seriesName ?? "",
            value as number
          )
        );
        return tooltipWrapper(theme, title, name, content);
      },
    },
    legend: {
      show: false,
    },
  };
};

export type Series = {
  name: string;
  data: number[];
};

type LineChartProps = {
  series: Series[];
  category: string[];
  tooltipTitle: string;
  containerHeight?: number;
};

export default function LineChart({
  category,
  series,
  tooltipTitle,
}: LineChartProps) {
  const theme = useTheme();

  let options = { ...commonOption(theme, category) };

  if (Array.isArray(series)) {
    options = _merge(options, normalOption(theme, tooltipTitle, series));
  }

  return (
    <ChartWrapper
      renderMode={"svg"}
      option={options}
      height={DEFAULT_CHART_HEIGHT}
      sx={{ background: theme.palette.neutral[7] }}
      settings={{ notMerge: true }}
    />
  );
}
