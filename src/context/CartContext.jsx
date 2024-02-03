import React, { createContext, useContext, useReducer } from 'react';

// Create context
const CartContext = createContext();

// Create initial state
const initialState = {
  cartCount: 0,
};

// Create reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    default:
      return state;
  }
};

// Create CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
