import React, { useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    // Retrieve total amount from localStorage
    const total = localStorage.getItem('totalAmount');
    if (total) {
      setTotalAmount(total);
    }
  }, []);

  return (
    <div className="container mt-4"  style={{ backgroundColor: 'lightblue', color: 'black' }}>
      <h2>Checkout</h2>
      {totalAmount ? (
        <div>
          <p><strong>Total Amount: ${totalAmount}</strong></p>
          <button className="btn btn-success">Complete Purchase</button>
          <br></br><br></br>
          <img src="/image/image1.png" alt="My Image" />
         
        </div>
        
        
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default CheckoutPage;
