import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

export default function RecipeList() {
  const { recipes, deleteRecipe, updateRecipe } = useRecipeStore();
  const [editId, setEditId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes yet. Add one above!</p>}

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {editId === recipe.id ? (
              <>
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <button
                  onClick={() => {
                    updateRecipe(recipe.id, { title: editedTitle });
                    setEditId(null);
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                <button
                  onClick={() => {
                    setEditId(recipe.id);
                    setEditedTitle(recipe.title);
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
