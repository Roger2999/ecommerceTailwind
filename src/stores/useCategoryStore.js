import { create } from "zustand";
//para manejo de estado global de barra de categorias
export const useCategoryStore = create((set) => ({
  category: "all",
  onCategoryChange: (e) =>
    set((state) => ({
      category: (state.category = e.target.value),
    })),
}));
