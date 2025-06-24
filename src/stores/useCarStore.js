import { create } from "zustand";

export const useCarStore = create((set) => ({
  car: [],
  addToCar: (product) =>
    set((state) => ({
      car: [...state.car, { ...product, quantity: 1 }],
    })),
  removeFromCar: (productId) =>
    set((state) => ({
      car: state.car.filter((product) => product.id !== productId),
    })),
  moreLot: (productId) =>
    set((state) => ({
      car: state.car.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    })),
  lessLot: (productId) =>
    set((state) => ({
      car: state.car.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    })),
}));
