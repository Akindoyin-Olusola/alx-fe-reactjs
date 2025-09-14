import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>🍲 Recipe Sharing App</h1>
      
      {/* Add new recipes first */}
      <AddRecipeForm />
      
      {/* Display recipe list */}
      <RecipeList />
    </div>
  );
}

export default App;
