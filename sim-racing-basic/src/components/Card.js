// src/components/Card.js
import React from 'react';

const Card = ({ item, onAddToWishlist, onDeleteFromWishlist, isInWishlist }) => {
  const handleAddToWishlist = () => {
    onAddToWishlist(item);
  };

  const handleDeleteFromWishlist = () => {
    onDeleteFromWishlist(item);
  };

  return (
    <div style={cardStyle}>
      <img src={item.img} alt={item.title} style={imageStyle} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>

      {/* Additional details based on product type */}
      {item.type === 'wheel' && <p>Type: {item.type}</p>}
      {item.type === 'pedal' && <p>Number of Pedals: {item.numPedals}</p>}
      {item.type === 'cockpit' && <p>Compatibility: {item.compatibility}</p>}

      {/* Display Brand, Model, and Price */}
      <p>Brand: {item.brand}</p>
      <p>Model: {item.model}</p>
      <p>Price: ${item.price}</p>

      {/* Conditional rendering based on wishlist status */}
      {isInWishlist ? (
        <button onClick={handleDeleteFromWishlist}>Remove from Wishlist</button>
      ) : (
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      )}
    </div>
  );
};

const cardStyle = {
  padding: '20px',
  margin: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '200px',
  marginBottom: '10px',
};

export default Card;
