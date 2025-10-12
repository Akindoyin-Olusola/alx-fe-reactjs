import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function Posts() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // cache valid for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📬 Posts</h2>
      <button
        onClick={refetch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4"
      >
        Refresh Posts
      </button>
      <ul className="space-y-2">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
