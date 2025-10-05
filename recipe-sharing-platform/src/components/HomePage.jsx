import React from "react";
import recipes from "./data.json";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🍴 Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <a
                href={`/recipes/${recipe.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
