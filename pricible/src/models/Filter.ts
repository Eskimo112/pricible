export interface Filter {
  keyword: string | null;
  smallestPrice: number | null;
  biggestPrice: number | null;
  category: string | null;
  location: string | null;
  provider: string | null;
  isMall: boolean | null;
  rate: number | null;
  pageSize: number;
  pageIndex: number;
}
