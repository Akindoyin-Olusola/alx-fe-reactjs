import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div>
        <h1>🍲 Recipe Sharing App</h1>

        {/* ✅ Search bar always visible */}
        <SearchBar />

        {/* ✅ Show favorites & recommendations */}
        <FavoritesList />
        <RecommendationsList />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
