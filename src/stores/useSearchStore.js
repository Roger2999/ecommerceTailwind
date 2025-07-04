import { QueryClient } from "@tanstack/react-query";
import { create } from "zustand";
//Para manejo de estado globar de barra de busqueda
export const useSearchStore = create((set) => ({
  search: "",
  onSearchChange: (e) =>
    set((state) => ({
      search: (state.search = e.target.value),
    })),
}));
