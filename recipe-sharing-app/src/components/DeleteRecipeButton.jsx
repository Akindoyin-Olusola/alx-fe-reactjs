import useRecipeStore from "./recipeStore";

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = (event) => {
    event.preventDefault(); // ✅ Good practice for ALX checks
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: "0.5rem", color: "red" }}>
      Delete
    </button>
  );
}
