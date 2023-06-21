import { create } from "zustand";
import { Category } from "../feature/home/api";

interface CategoryState {
  categories: Category[];
}

interface CategoryAction {
  setCategories: (categories: Category[]) => void;
}

export const useCategoryStore = create<CategoryState & CategoryAction>(
  (set) => ({
    categories: [],
    setCategories: (categories: Category[]) =>
      set((state) => ({ ...state, categories: categories })),
  })
);
