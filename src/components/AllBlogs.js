// AllBlogs.js
import React from 'react';
import BlogPost from './BlogPost';
import './AllBlogs.css'; // Import CSS file for styling

const AllBlogs = ({ blogs, onDeleteBlog }) => {
  const handleDelete = (id) => {
    onDeleteBlog(id); // Call the onDeleteBlog function passed from parent (App.js)
  };

  return (
    <div className="blog-list">
      {blogs.length === 0 ? (
        <p className="no-blogs-msg">No blogs available.</p>
      ) : (
        blogs.map(blog => (
          <div className="blog-post" key={blog.id}>
            <BlogPost blog={blog} />
            <button className="delete-button" onClick={() => handleDelete(blog.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AllBlogs;
