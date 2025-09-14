import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="🔍 Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 rounded-md w-full mb-4"
    />
  );
};

export default SearchBar;
