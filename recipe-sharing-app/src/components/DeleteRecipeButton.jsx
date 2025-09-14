import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = (event) => {
    event.preventDefault(); // ✅ required
    deleteRecipe(recipeId);
    navigate("/"); // ✅ redirect to home/recipe list after delete
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginLeft: "0.5rem", color: "red" }}
    >
      Delete
    </button>
  );
}
