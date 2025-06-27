import { create } from "zustand";

export const useCategoryStore = create((set) => ({
  category: "all",
  onCategoryChange: (e) =>
    set((state) => ({
      category: (state.category = e.target.value),
    })),
}));
