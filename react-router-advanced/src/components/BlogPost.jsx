import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h3>Viewing Blog Post #{postId}</h3>
      <p>This is the content of post {postId}.</p>
    </div>
  );
};

export default BlogPost;
