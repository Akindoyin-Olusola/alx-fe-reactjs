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
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // ✅ Advanced React Query configurations
    cacheTime: 1000 * 60 * 5, // cacheTime keeps data for 5 minutes
    refetchOnWindowFocus: false, // disable automatic refetch
    keepPreviousData: true, // keepPreviousData ensures smooth refetch
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
