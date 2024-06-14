import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllBlogs from './components/AllBlogs';
import AddBlog from './components/AddBlog';
import './index.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} onDeleteBlog={deleteBlog} />} />
        <Route path="/blogs" element={<AllBlogs blogs={blogs} onDeleteBlog={deleteBlog} />} />
        <Route path="/add-blog" element={<AddBlog onAddBlog={addBlog} />} />
      </Routes>
    </div>
  );
};

export default App;
