import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Post 1 Title',
    content: 'This is the content of post 1...',
    author: 'John Doe',
    date: '2023-03-15',
    image: 'https://example.com/post1.jpg',
  },
  {
    id: 2,
    title: 'Post 2 Title',
    content: 'This is the content of post 2...',
    author: 'Jane Doe',
    date: '2023-03-16',
    image: 'https://example.com/post2.jpg',
  },
  // Add more posts here
];

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <img src={post.image} alt={post.title} />
          <h3>{post.title}</h3>
          <p>
            <small>{post.author} | {post.date}</small>
          </p>
          <p>{post.content.slice(0, 100)}...</p>
          <a href="#">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;