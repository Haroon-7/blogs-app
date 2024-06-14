import React, { useState } from 'react';

const AddBlog = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { id: Date.now(), title, content };
    onAddBlog(newBlog);
    setTitle('');
    setContent('');
  };

  return (
    <div className="container add-blog">
      <h1 className="text-center">Add a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
