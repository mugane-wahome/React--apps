import React from 'react';
import './App.css'; // Import your CSS file (optional)
import Header from './components/Header';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;