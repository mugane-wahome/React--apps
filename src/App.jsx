// App.jsx
import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import FetchMovie from './components/FetchMovie';
import Product from './components/Product';
import SearchBox from './components/SearchBox';

const App = () => {
  
  return (
    
    <CartProvider>
      <InnerApp />
    </CartProvider>
  );
};

const InnerApp = () => {
  const { addToCart } = useCart();

  return (

    <div>
      <FetchMovie addToCart={addToCart} />
      
      
    </div>
  );
};

export default App;
