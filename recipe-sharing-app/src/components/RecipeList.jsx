import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet. Add one above!</p>}

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {/* ✅ Clicking recipe navigates to /recipes/:id */}
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

