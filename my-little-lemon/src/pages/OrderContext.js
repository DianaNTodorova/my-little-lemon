import React, { createContext, useContext, useState } from 'react';

// Create context
const OrderContext = createContext();

// Hook for using the context
export const useOrder = () => useContext(OrderContext);

// Provider component
export const OrderProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // Function to add items to the basket
  const addToCart = (item) => {
    setBasket((prev) => {
      const existingItem = prev.find(
        (basketItem) => basketItem.title === item.title
      );

      if (existingItem) {
        // If the item already exists, update its quantity
        return prev.map((basketItem) =>
          basketItem.title === item.title
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      }

      // If the item is new, add it to the basket
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <OrderContext.Provider value={{ basket, addToCart }}>
      {children}
    </OrderContext.Provider>
  );
};
