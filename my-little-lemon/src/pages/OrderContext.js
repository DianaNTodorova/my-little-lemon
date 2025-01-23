import React, { createContext, useContext, useReducer } from 'react';

// Create context
const OrderContext = createContext();

// Hook for using the context
export const useOrder = () => useContext(OrderContext);

// Reducer function to manage the basket state
const basketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.findIndex(
        (item) => item.title === action.item.title
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, update its quantity
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // If the item is new, add it to the basket
      return [...state, { ...action.item, quantity: 1 }];
    }

    case 'REMOVE_FROM_CART': {
      const existingItemIndex = state.findIndex(
        (item) => item.title === action.title
      );

      if (existingItemIndex !== -1) {
        const item = state[existingItemIndex];

        // If the quantity is greater than 1, just decrement it
        if (item.quantity > 1) {
          return state.map((item, index) =>
            index === existingItemIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }else{

        // If the quantity is 1, remove the item entirely
        return state.filter((item) => item.title !== action.title);
        }}

      return state; // If the item wasn't found, return the state unchanged
    }

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

// Provider component
export const OrderProvider = ({ children }) => {
  const [basket, dispatch] = useReducer(basketReducer, []);

  // Function to add items to the basket
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', item });
  };

  // Function to remove or decrement items from the basket
  const removeFromCart = (title) => {
    dispatch({ type: 'REMOVE_FROM_CART', title });
  };

  return (
    <OrderContext.Provider value={{ basket, addToCart, removeFromCart }}>
      {children}
    </OrderContext.Provider>
  );
};
