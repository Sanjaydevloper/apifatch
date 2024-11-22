import React, { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);  // Cart items state
  const [totalAmount, setTotalAmount] = useState(0);  // Total amount state

  useEffect(() => {
    // Retrieve the cart items and total amount from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []; 
    const storedTotal = localStorage.getItem('totalAmount'); 

    setCartItems(storedCart); 
    setTotalAmount(storedTotal || 0); 
  }, []);

 
  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <div key={index} className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src={item.image}  
          alt={item.title} 
          style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '20px' }}  
        />
        <div>
          <strong>{item.title}</strong><br />
          <span>Price: ${item.price}</span><br />
          <span>Quantity: {item.quantity}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: 'lightblue', color: 'black' }}>
      <h2>Checkout</h2>
      {cartItems.length > 0 ? (
        <div>
          <h4>Your Cart Items:</h4>
          {renderCartItems()} {/* Render cart items */}

          <div>
          <p><strong>Total Amount: ${parseFloat(totalAmount).toFixed(2)}</strong></p>

            <button className="btn btn-success">Complete Purchase</button>
          </div>
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default CheckoutPage;
