import React, { createContext, useContext, useState } from 'react';

// Create a context for the wishlist
const WishlistContext = createContext();

// Create a custom hook to use the WishlistContext
export const useWishlist = () => {
  return useContext(WishlistContext);
};

// Create a provider for the WishlistContext
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add item to the wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  // Remove item from the wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  // Get wishlist items
  const getWishlistItems = () => wishlist;

  // Get wishlist count
  const getWishlistCount = () => wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        getWishlistItems,
        getWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
