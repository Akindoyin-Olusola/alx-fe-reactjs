import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const { recipes, favorites, removeFavorite } = useRecipeStore();

  // ✅ Map favorite IDs to actual recipe objects
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>⭐ My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet. Add some from the recipe list!</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "10px" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>
              Remove from Favorites
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
