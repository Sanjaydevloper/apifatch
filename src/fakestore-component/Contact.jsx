import React, { useState } from 'react';

function Contact() {
  // Step 1: State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Step 2: Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(formData); // Log form data to console
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: 'lightblue' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions, please don't hesitate to contact us.</p>
      

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type='text'
            name='firstName'
            placeholder='Type your Firstname'
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type='text'
            name='lastName'
            placeholder='Type your Lastname'
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type='email'
            name='email'
            placeholder='Type your email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type='text'
            name='message'
            placeholder='Type your message'
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          Submit
        </button>
      </form>

      {/* Address Section */}
      <div className="row mt-4" style={{ backgroundColor: 'lightblue' }}>
        <div className="col-md-6">
          <h3>Address</h3>
          <p>BTM Layout, Bengaluru</p>
          <p>Phone: 8144114613</p>
          <p>Email: sanjayapradhan18441@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
