// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">All Blogs</Link></li>
        <li><Link to="/add-blog">Add Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
