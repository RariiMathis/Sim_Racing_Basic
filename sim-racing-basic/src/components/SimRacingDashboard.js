// src/components/SimRacingDashboard.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Cockpits from './Cockpits';
import Pedals from './Pedals';
import Wheels from './Wheels';
import Wishlist from './WishList';

const SimRacingDashboard = () => {
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

  // State for selected category and products
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts or category changes
    const fetchData = async () => {
      if (selectedCategory) {
        try {
          let response;
          switch (selectedCategory) {
            case 'wheels':
              response = await axios.get('http://localhost:5000/api/wheels'); // Update the URL
              break;
            case 'pedals':
              response = await axios.get('http://localhost:5000/api/pedals'); 
              break;
            case 'cockpits':
              response = await axios.get('http://localhost:5000/api/cockpits'); 
              break;
            case 'wishlist':
              response = await axios.get('http://localhost:5000/api/wishlist'); 
              break;
            default:
              console.error('Invalid category');
          }

          // Log fetched data
          console.log('Fetched data:', response.data);

          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [selectedCategory]);

  

  const handleCategorySelect = async (category) => {
    setSelectedCategory(category);
  }; 
  
  // Display cards based on selected category
  const renderCards = () => {
    if (products.length === 0) {
      return <p>No products available for the selected category.</p>;
    }

    return products.map((item, index) => (
      <div key={index} style={cardStyle}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button>Add to {selectedCategory === 'wishlist' ? 'Wish List' : 'Cart'}</button>
      </div>
    ));
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
      {selectedCategory === 'wheels' && <Wheels />}
      {selectedCategory === 'pedals' && <Pedals />}
      {selectedCategory === 'cockpits' && <Cockpits />}
      {selectedCategory === 'wishlist' && <Wishlist />}

      <hr />
      <Outlet />
    </div>
  );
};

export default SimRacingDashboard;
