// BlogPost.js
import React from 'react';

const BlogPost = ({ blog }) => {
  return (
    <div className="blog-post-content">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPost;
