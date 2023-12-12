// src/components/SimRacingDashboard.js
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

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

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://your-flask-api-url/${selectedCategory}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (selectedCategory) {
      fetchData();
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }; 
  
  // Cards data for different categories
  const cardsData = {
    wheels: [
      { title: 'Wheel Product 1', description: 'Description of Wheel Product 1' },
      { title: 'Wheel Product 2', description: 'Description of Wheel Product 2' },
    ],
    pedals: [
      { title: 'Pedal Product 1', description: 'Description of Pedal Product 1' },
      { title: 'Pedal Product 2', description: 'Description of Pedal Product 2' },
    ],
    cockpits: [
      { title: 'Cockpit Product 1', description: 'Description of Cockpit Product 1' },
      { title: 'Cockpit Product 2', description: 'Description of Cockpit Product 2' },
    ],
    wishlist: [
      { title: 'Wishlist Item 1', description: 'Description of Wishlist Item 1' },
      { title: 'Wishlist Item 2', description: 'Description of Wishlist Item 2' },
    ],
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

      {/* Display cards based on selected category */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {selectedCategory &&
          cardsData[selectedCategory].map((item, index) => (
            <div key={index} style={cardStyle}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>Add to {selectedCategory === 'wishlist' ? 'Wish List' : 'Cart'}</button>
            </div>
          ))}
      </div>

      <hr />
      <Outlet />
    </div>
  );
};

export default SimRacingDashboard;





