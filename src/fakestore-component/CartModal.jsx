import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const CartModal = ({ onClose }) => {
  const { cart, getTotalPrice } = useCart(); // Get cart and getTotalPrice function from context
  const navigate = useNavigate();

  const handleCheckout = () => {
    const totalAmount = getTotalPrice();
    localStorage.setItem('totalAmount', totalAmount); // Store the total in localStorage
    navigate('/checkout'); // Redirect to the checkout page
  };

  return (
    <div className="modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Cart</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul className="list-group">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                    />
                    {item.title} - ${item.price} x {item.quantity}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
