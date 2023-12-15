// src/components/SimRacingDashboard.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Cockpits from './Cockpits';
import Pedals from './Pedals';
import Wheels from './Wheels';
import Wishlist from './WishList';

// Define API base URL
const API_BASE_URL = 'http://localhost:5000/api/';

const SimRacingDashboard = () => {
  // State for selected category, products, and loading status
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Styles
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
    width: '50%',
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

  useEffect(() => {
    // Fetch data from the backend when the component mounts or category changes
    const fetchData = async () => {
      if (selectedCategory) {
        try {
          setLoading(true);

          const response = await axios.get(`${API_BASE_URL}${selectedCategory}`);

          // Log fetched data
          console.log('Fetched data:', response.data);

          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Display a user-friendly error message
          // You might want to set an error state for more advanced error handling
          alert('Error fetching data. Please try again.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 'wheels':
        return <Wheels products={products} />;
      case 'pedals':
        return <Pedals products={products} />;
      case 'cockpits':
        return <Cockpits products={products} />;
      case 'wishlist':
        return <Wishlist products={products} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Welcome to the Sim Racing Store!</h2>
      <nav style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button style={buttonStyle} onClick={() => handleCategorySelect('wheels')}>
          Wheels
        </button>
        <button style={buttonStyle} onClick={() => handleCategorySelect('pedals')}>
          Pedals
        </button>
        <button style={buttonStyle} onClick={() => handleCategorySelect('cockpits')}>
          Cockpits
        </button>
        <button style={buttonStyle} onClick={() => handleCategorySelect('wishlist')}>
          Wish List
        </button>
      </nav>

      {/* Search Bar */}
      <input type="text" placeholder="Search for products" style={searchBarStyle} />

      {/* Render the selected category component */}
      {renderCategoryComponent()}

      <hr />
      {products.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {products.map((item, index) => (
            <div key={index} style={{ ...cardStyle, width: '18%', marginBottom: '20px' }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {/* Render all data for each object */}
              {Object.entries(item).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}

              <button>Add to {selectedCategory === 'wishlist' ? 'Wish List' : 'Cart'}</button>
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default SimRacingDashboard;
