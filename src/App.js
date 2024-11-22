import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Products } from './fakestore-component/products';
import { ProductDetail } from './fakestore-component/ProductDetail';
import { CartProvider } from './fakestore-component/CartContext';
import { WishlistProvider, useWishlist } from './fakestore-component/WishlistContext'; // Import WishlistProvider and useWishlist
import { useCart } from './fakestore-component/CartContext'; // Import useCart
import CartModal from './fakestore-component/CartModal'; 
import Contact from './fakestore-component/Contact';
import Shop from './fakestore-component/Shop';
import CheckoutPage from './fakestore-component/CheckoutPage'; 
import WishlistModal from './fakestore-component/WishlistModal'; // Import WishlistModal

function App() {
  return (
    <CartProvider>
      <WishlistProvider> {/* Wrap the app with WishlistProvider */}
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<CheckoutPage />} /> 
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

const NavBar = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);  // State for cart modal visibility
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false); // State for wishlist modal visibility
  const { getCartCount } = useCart();  // Use CartContext to get cart count
  const cartCount = getCartCount();
  const { getWishlistCount } = useWishlist(); // Use WishlistContext to get wishlist count
  const wishlistCount = getWishlistCount();

  // Open the cart modal
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  // Close the cart modal
  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  // Open the wishlist modal
  const openWishlistModal = () => {
    setIsWishlistModalOpen(true);
  };

  // Close the wishlist modal
  const closeWishlistModal = () => {
    setIsWishlistModalOpen(false);
  };

  return (
    <div>
      <nav className="d-flex justify-content-between p-2 bg-dark text-white">
        <div className="h3">Fakestore.</div>
        <div className="fs-4">
          <span className="me-3">
            <Link to="/" className="text-decoration-none link-light">Home</Link>
          </span>
          <span className="me-3">
            <Link to="/shop" className="text-decoration-none link-light">Shop</Link>
          </span>
          <span className="me-3">
            <Link to="/contact" className="text-decoration-none link-light">Contact</Link>
          </span>
        </div>
        <div>
          <span className="bi bi-search me-3"></span>
          {/* Wishlist icon with count */}
          <span className="bi bi-heart me-3" onClick={openWishlistModal}>
            {wishlistCount > 0 && <span className="badge bg-danger">{wishlistCount}</span>}
          </span>
          <CartIcon cartCount={cartCount} onClick={openCartModal} />
        </div>
      </nav>

      {/* Wishlist Modal */}
      {isWishlistModalOpen && <WishlistModal onClose={closeWishlistModal} />}

      {/* Cart Modal */}
      {isCartModalOpen && <CartModal onClose={closeCartModal} />}
    </div>
  );
};

// Cart Icon component
const CartIcon = ({ cartCount, onClick }) => {
  return (
    <span className="bi bi-cart4" onClick={onClick} style={{ cursor: 'pointer' }}>
      {cartCount > 0 && <span className="badge bg-danger">{cartCount}</span>}
    </span>
  );
};

export default App;
