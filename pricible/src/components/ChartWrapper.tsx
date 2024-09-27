import type { ECharts, EChartsOption, SetOptionOpts } from "echarts";

import { useCallback, useEffect, useMemo, useRef } from "react";

import { Box, BoxProps, Tooltip } from "@mui/material";
import { getInstanceByDom, init } from "echarts";

interface ChartWrapperProps {
  option: EChartsOption;
  settings?: SetOptionOpts;
  loading?: boolean;
  getChart?: (chart: ECharts | undefined) => void;
  onEvent?: {
    name: string;
    query?: any;
    handler: (chart: ECharts | undefined, params: any) => void;
  }[];
  onWidthChange?: (width: number) => void;
  //
  renderMode?: "svg" | "canvas";
}

const DEFAULT_OPTIONS: EChartsOption = {
  textStyle: {
    fontFamily: "Nunito Sans",
    fontWeight: 400,
  },
};

const SAFE_RESIZE_DEBOUNCE_MS = 500;

export default function ChartWrapper({
  option,
  settings,
  loading,
  onEvent,
  getChart,
  onWidthChange,
  width = "100%",
  height = "100%",
  renderMode = "svg",
  ...rest
}: ChartWrapperProps & BoxProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  const getChartInstance = useCallback(() => {
    if (chartRef.current == null) {
      return null;
    }
    return getInstanceByDom(chartRef.current);
  }, []);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      if (onWidthChange) onWidthChange(chartRef.current.clientWidth);
      chart = init(chartRef.current, undefined, { renderer: renderMode });
      if (chart && getChart) getChart(chart);
      if (onEvent)
        onEvent.map((e) => {
          if (e.query)
            chart?.on(e.name, e.query, (params: any) =>
              e.handler(chart, params)
            );
          else chart?.on(e.name, (params) => e.handler(chart, params));
        });
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChartOnWindowSizeChanges() {
      if (onWidthChange) onWidthChange(chartRef.current?.clientWidth ?? 0);
      chart?.resize();
    }

    window.addEventListener("resize", resizeChartOnWindowSizeChanges);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChartOnWindowSizeChanges);
    };
  }, [width, height, onEvent, onWidthChange, getChart, renderMode]);

  useEffect(() => {
    // Update chart
    const chart = getChartInstance();
    chart?.setOption({ ...DEFAULT_OPTIONS, ...option }, settings);
  }, [option, settings, getChartInstance]);

  useEffect(() => {
    // Update chart
    const chart = getChartInstance();
    loading === true ? chart?.showLoading() : chart?.hideLoading();
  }, [loading, getChartInstance]);

  return (
    <Box
      ref={chartRef}
      width={width}
      height={height}
      {...rest}
      sx={{
        "#tooltip": {
          ["&::-webkit-scrollbar"]: {
            width: "4px",
            height: "4px", // NOTE: for horizontal scrollbar
            borderRadius: " 8px",
            backgroundColor: (theme) => theme.palette.neutral[6],
          },
          ["&::-webkit-scrollbar-thumb"]: {
            borderRadius: "4px",
            backgroundColor: (theme) => theme.palette.neutral[4],
          },
        },
      }}
    />
  );
}
