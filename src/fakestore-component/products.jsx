import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 
import { useWishlist } from './WishlistContext'; // Import WishlistContext

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist(); // Get the function to add to wishlist

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card">
              <Link to={`/product/${product.id}`}>
                <span className="bi bi-heart me-3" onClick={() => addToWishlist(product)} style={{ cursor: 'pointer' }}></span> {/* Add to wishlist */}
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: '1.1rem' }}>
                  {product.title}
                </h5>
                <p className="card-text">
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + '...'
                    : product.description}
                </p>
                <p className="card-text">
                  <strong>${product.price}</strong>
                </p>

                {/* Add to Cart Button */}
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart({ ...product, quantity: 1 })} // Add product to cart
                >
                  Add to Cart
                </button>

                <Link to={`/product/${product.id}`} className="btn btn-secondary mt-2">
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
