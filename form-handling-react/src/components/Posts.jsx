import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const Posts = () => {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60000, // Cache data for 1 min
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p className="text-center">Loading posts...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Fetched Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          disabled={isFetching}
        >
          {isFetching ? "Refreshing..." : "Refetch"}
        </button>
      </div>

      <ul className="space-y-3">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="border-b pb-2">
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
