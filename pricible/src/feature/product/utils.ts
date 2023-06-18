import { Series } from "../../components/line-chart/LineChart";
import { HistoryPrice } from "../../models/HistoryPrice";

export function seriesAndCategoryFrom(historyPrice: HistoryPrice[]): {
  series: Series[];
  category: string[];
} {
  const series = [
    {
      data: historyPrice
        .sort((a, b) => a.date.localeCompare(b.date))
        .map((item) => item.price),
      name: "",
    },
  ];
  const category = historyPrice.map((item) => item.date.substring(0, 10));
  return { series, category };
}
