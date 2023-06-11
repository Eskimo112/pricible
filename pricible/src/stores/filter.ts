import { create } from "zustand";

interface FilterState {
  keyword: string | null;
  price: {
    from: number | null;
    to: number | null;
  };
  category: string | null;
  location: string | null;
  provider: string | null;
  mall: boolean | null;
  rate: number | null;
  pagination: {
    currentPage: number;
    totalPage: number;
  };
}

interface FilterAction {
  setFilter: (filter: Partial<FilterState>) => void;
}

export const useFilter = create<FilterState & FilterAction>((set) => ({
  keyword: null,
  price: {
    from: null,
    to: null,
  },
  category: null,
  location: null,
  provider: null,
  mall: null,
  rate: null,
  pagination: {
    currentPage: 1,
    perPage: 10,
    totalPage: 0,
  },
  setFilter: (filter) => set((state) => ({ ...state, ...filter })),
}));
