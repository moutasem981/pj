import i18n from "@/i18next";
import { create } from "zustand";

const useFavorites = create((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites",)) || [],

  addFavorite: (product) => {
    set((state) => {
      const newFavorites = [...state.favorites, product];

      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return {
        favorites: newFavorites,
      };
    });
  },

  removeFavorite: (productId) => {
    set((state) => {
      const newFavorites = state.favorites.filter(
        (product) => product.id !== productId
      );

      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return {
        favorites: newFavorites,
      };
    });
  },
}));

export default useFavorites;