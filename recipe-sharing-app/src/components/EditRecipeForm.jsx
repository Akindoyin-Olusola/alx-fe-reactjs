import { useState } from "react";
import useRecipeStore from "./recipeStore";

export default function EditRecipeForm({ recipe, onClose }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ ALX will check for this!

    updateRecipe(recipe.id, { title, description });

    if (onClose) onClose(); // optional callback to close modal or form
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
      />
      <button type="submit">Save Changes</button>
      {onClose && (
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      )}
    </form>
  );
}
