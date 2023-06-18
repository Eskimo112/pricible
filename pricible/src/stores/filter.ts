import { create } from "zustand";
import { Filter } from "../models/Filter";

interface FilterAction {
  setFilter: (filter: Partial<Filter>) => void;
  removeFilter: () => void;
}

export const useFilterStore = create<Filter & FilterAction>((set) => ({
  keyword: null,
  smallestPrice: null,
  biggestPrice: null,
  category: null,
  location: null,
  provider: null,
  isMall: null,
  rate: null,
  pageSize: 12,
  pageIndex: 1,
  setFilter: (newFilter) => set((state) => ({ ...state, ...newFilter })),
  removeFilter: () =>
    set((state) => ({
      ...state,
      // keyword: null,
      smallestPrice: null,
      biggestPrice: null,
      // category: null,
      location: null,
      provider: null,
      isMall: null,
      rate: null,
      pageSize: 12,
      pageIndex: 1,
    })),
}));
