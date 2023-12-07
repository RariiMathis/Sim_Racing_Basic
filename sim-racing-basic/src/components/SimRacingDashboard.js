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
      <hr />
      <Outlet />
    </div>
  );
};

export default SimRacingDashboard;


