import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // ✅ Advanced React Query configurations
    staleTime: 1000 * 60 * 1, // 1 minute – data stays "fresh" for 1 min
    cacheTime: 1000 * 60 * 5, // cache data for 5 minutes before garbage collection
    refetchOnWindowFocus: false, // disable refetch on window focus
    keepPreviousData: true, // maintain previous data while refetching
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {isFetching && <p>Updating...</p>}
      <ul>
        {posts?.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
