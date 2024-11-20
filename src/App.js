import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Products } from './fakestore-component/products';
import { ProductDetail } from './fakestore-component/ProductDetail';
import { CartProvider, useCart } from './fakestore-component/CartContext';
import CartModal from './fakestore-component/CartModal'; 
import Contact from './fakestore-component/Contact';
import Shop from './fakestore-component/Shop';
import CheckoutPage from './fakestore-component/CheckoutPage'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Add checkout route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const { getCartCount } = useCart(); // Use cart context to get the count of items
  const cartCount = getCartCount();

  // Open modal when cart icon is clicked
  const openCartModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeCartModal = () => {
    setIsModalOpen(false);
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
          <span className="bi bi-heart me-3"></span>
          <span className="bi bi-person-fill me-3"></span>
          <CartIcon cartCount={cartCount} onClick={openCartModal} /> {/* Display Cart Icon */}
        </div>
      </nav>

     
      {isModalOpen && <CartModal onClose={closeCartModal} />}
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
