import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorites = create(
  persist(
    (set) => ({
      favorites: [],

      addFavorite: (product) =>
        set((state) => {

          const exists = state.favorites.some(
            (item) => item.id === product.id
          );

          if (exists) {
            return state;
          }

          return {
            favorites: [...state.favorites, product],
          };
        }),

      removeFavorite: (productId) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (product) => product.id !== productId
          ),
        })),
    }),
    {
      name: "favorites",
    }
  )
);

export default useFavorites;