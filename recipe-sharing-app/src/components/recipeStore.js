import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ Favorites array
  favorites: [],

  // ✅ Recommendations array
  recommendations: [],

  // Add a recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  // Delete a recipe (also removes it from favorites)
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // ✅ Add to favorites
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, id])],
    })),

  // ✅ Remove from favorites
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // ✅ Generate recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
