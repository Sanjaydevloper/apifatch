import React from 'react';
import { useWishlist } from './WishlistContext'; // Import Wishlist context

const WishlistModal = ({ onClose }) => {
  const { getWishlistItems, removeFromWishlist } = useWishlist(); // Use the Wishlist context
  const wishlistItems = getWishlistItems(); // Get the wishlist items

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId); // Remove product from wishlist
  };

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Wishlist</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {wishlistItems.length > 0 ? (
              <div>
                {wishlistItems.map((item) => (
                  <div className="d-flex justify-content-between align-items-center" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div className="ms-2">{item.title}</div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your wishlist is empty!</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
