// FetchMovie.jsx
import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import "./FetchMovie.css";
const FetchMovie = ({ addToCart }) => {
  const [data, setData] = useState({
    results: [],
  });
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    // Replace the placeholder URL with your actual API endpoint
    const apiKey = "d3adc528937c14b4044f9ee3bf46f522";
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    const response = await fetch(api);
    const results = await response.json();
    setData(results);
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div className="display">
      <h1>Get All Your Favourite Movies Here</h1>
      <SearchBox onSearch={handleSearch} />
      <div className="movies">
        {data.results.map((movie) => (
          <div id="content" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="paragraphs">
              
              <p>{movie.release_date}</p>
              <p>{movie.vote_average}</p>
              <p>{movie.popularity}</p>
              <p>{movie.id}</p>
            </div>
            <button id="cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchMovie;
