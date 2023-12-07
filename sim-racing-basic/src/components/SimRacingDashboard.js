// src/components/SimRacingDashboard.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const SimRacingDashboard = () => {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const searchBarStyle = {
    width: '50%', // Adjust the width as needed
    padding: '10px',
    margin: '10px auto',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const cardStyle = {
    padding: '20px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  return (
    <div>
      <h2>Welcome to the Sim Racing Store!</h2>
      <nav style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <Link to="wheels" style={buttonStyle}>
          Wheels
        </Link>
        <Link to="pedals" style={buttonStyle}>
          Pedals
        </Link>
        <Link to="cockpits" style={buttonStyle}>
          Cockpits
        </Link>
        <Link to="wishlist" style={buttonStyle}>
          Wish List
        </Link>
      </nav>

      {/* Search Bar */}
      <input type="text" placeholder="Search for products" style={searchBarStyle} />

      {/* Cards for different items */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h3>Wheel Product</h3>
          <p>Description of the wheel product.</p>
          <button>Add to Cart</button>
        </div>

        <div style={cardStyle}>
          <h3>Pedal Product</h3>
          <p>Description of the pedal product.</p>
          <button>Add to Cart</button>
        </div>

        <div style={cardStyle}>
          <h3>Cockpit Product</h3>
          <p>Description of the cockpit product.</p>
          <button>Add to Cart</button>
        </div>

        <div style={cardStyle}>
          <h3>Wishlist Item</h3>
          <p>Description of the wishlist item.</p>
          <button>Move to Cart</button>
        </div>
      </div>

      <hr />
      <Outlet />
    </div>
  );
};

export default SimRacingDashboard;


