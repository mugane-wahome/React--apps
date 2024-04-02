import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import "./FetchMovie.css";

const FetchMovie = ({ addToCart }) => {
  const [data, setData] = useState({
    results: [],
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const getData = async () => {
    
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
    setCartCount((prevCount) => prevCount + 1);
    addToCart();
    setCartItems((prevItems) => [...prevItems, data.results]);
  };

  const handleCartCountClick = () => {
    // Display cart items in a modal or alert
    window.alert(`Items in Cart: ${JSON.stringify(cartItems)}`);
  };

  return (
    <div className="display">
      <div className="count"><p onClick={handleCartCountClick} style={{ cursor: "pointer" }}>
        Cart Count: {cartCount}
      </p></div>
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
