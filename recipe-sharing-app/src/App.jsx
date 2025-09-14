import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;
