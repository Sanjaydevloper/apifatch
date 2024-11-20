import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access the dynamic URL parameters

export function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoom, setZoom] = useState(1); // State to control zoom level

  const { id } = useParams(); // Get product ID from URL parameter

  useEffect(() => {
    // Fetch product details based on ID (corrected template literal)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  const handleMouseEnter = () => {
    setZoom(1.5); // Increase zoom on hover
  };

  const handleMouseLeave = () => {
    setZoom(1); // Reset zoom on hover exit
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-4">
      {product && (
        <div className="row">
          <div className="col-md-6">
            {/* Apply the zoom effect to the product image */}
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{
                transform: `scale(${zoom})`, // Corrected zoom effect with template literal
                transition: "transform 0.3s ease", // Smooth zoom transition
                width: "100%",
                height: "400px",
                objectFit: "cover",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price: ${product.price}</strong>
            </p>
            {/* Other product details */}
          </div>
        </div>
      )}
    </div>
  );
}
