// src/components/SimRacingDashboard.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Card from './Card';

// Define API base URL
const API_BASE_URL = 'http://localhost:5000/api/';

const SimRacingDashboard = () => {
  // State for selected category, products, and loading status
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleAddToCart = (item) => {
    console.log(`Added ${item.title} to Cart`);
    // Implement your logic to add the item to the cart
  };

  const handleAddToWishlist = (item) => {
    console.log(`Added ${item.title} to Wishlist`);
    // Implement your logic to add the item to the wishlist
  };

  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 'wheels':
      case 'pedals':
      case 'cockpits':
      case 'wishlist':
        return <CardList items={products} onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Welcome to the Sim Racing Store!</h2>
      <nav style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button onClick={() => handleCategorySelect('wheels')}>Wheels</button>
        <button onClick={() => handleCategorySelect('pedals')}>Pedals</button>
        <button onClick={() => handleCategorySelect('cockpits')}>Cockpits</button>
        <button onClick={() => handleCategorySelect('wishlist')}>Wish List</button>
      </nav>

      {/* Search Bar */}
      <input type="text" placeholder="Search for products" />

      {/* Render the selected category component */}
      {renderCategoryComponent()}

      <hr />
      <Outlet />
    </div>
  );
};

// New component to render a list of cards
const CardList = ({ items, onAddToCart, onAddToWishlist }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
};

export default SimRacingDashboard;
