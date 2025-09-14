import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // 🔎 Search term & filtered recipes
  searchTerm: "",
  filteredRecipes: [],

  // ✅ Add recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe].filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // ✅ Update recipe
  updateRecipe: (id, updatedFields) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedFields } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // ✅ Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const remaining = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: remaining,
        filteredRecipes: remaining.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // ✅ Set search term + re-filter recipes
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((r) =>
        r.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
