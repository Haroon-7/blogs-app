import React from 'react';
import AllBlogs from './AllBlogs';

const Home = ({ blogs, onDeleteBlog }) => {
  return (
    <div className="container home">
      <h1 className="text-center">Welcome to Blogs Display</h1>
      <p className="text-center">This is the home page of the blog application.</p>
      <h2 className="mt-2">Latest Blogs</h2>
      <AllBlogs blogs={blogs} onDeleteBlog={onDeleteBlog} showDeleteButton={false} />
    </div>
  );
};

export default Home;
