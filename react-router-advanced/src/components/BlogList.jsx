import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const posts = [
    { id: 1, title: "Learning React Router" },
    { id: 2, title: "Nested Routes in React" },
  ];

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
