import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!title.trim()) {
      formErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients
        .split(/,|\n/)
        .map((i) => i.trim())
        .filter((i) => i);
      if (ingredientList.length < 2) {
        formErrors.ingredients = "Please provide at least 2 ingredients.";
      }
    }

    if (!steps.trim()) {
      formErrors.steps = "Preparation steps are required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = { id: Date.now(), title, ingredients, steps };
    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-2">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients (comma or newline separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="e.g. 2 eggs, 1 cup flour..."
            rows="4"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Step 1: Preheat oven..."
            rows="4"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-2">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
