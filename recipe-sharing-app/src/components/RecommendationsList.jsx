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
        <SearchBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
                <FavoritesList /> {/* ✅ Show favorites below recipe list */}
                <RecommendationsList /> {/* ✅ Show recommendations below favorites */}
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
