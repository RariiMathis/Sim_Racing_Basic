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
    <div style={cardContainerStyle}>
      <div style={cardStyle}>
        <img src={item.img} alt={item.brand} style={imageStyle} />
        <h3>{item.brand}</h3>
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
    </div>
  );
};

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const cardStyle = {
  flex: '0 0 calc(100% - 20px)', // Set a fixed width for each card (adjust as needed)
  boxSizing: 'border-box',
  padding: '20px',
  margin: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
  height: '300px', // Set a fixed height for each card (adjust as needed)
  overflow: 'hidden', // Ensure content doesn't affect the height
  textAlign: 'center',
};

const imageStyle = {
  maxWidth: '75%',
  maxHeight: '200px',
  marginBottom: '5px',
};

export default Card;
