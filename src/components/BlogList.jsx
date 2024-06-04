import React from 'react';
import './Bogpost.css'
const blogPosts = [
  { id: 1, title: 'Post 1 Title', content: 'This is the content of post 1...' },
  { id: 2, title: 'Post 2 Title', content: 'This is the content of post 2...' },
  // Add more posts here
];

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.content.slice(0, 100)}...</p>
          <a href="#">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
