import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const SimRacingDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCategory) {
        try {
          setLoading(true);

          const response = await axios.get(`http://localhost:5000/api/${selectedCategory}`);

          console.log('Fetched data:', response.data);

          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
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

  const handleAddToWishlist = async (item) => {
    try {
      await axios.post('http://localhost:5000/api/wishlist', item);
      alert(`${item.title} added to Wishlist`);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      alert('Error adding to Wishlist. Please try again.');
    }
  };

  const handleDeleteFromWishlist = async (item) => {
    try {
      await axios.delete(`http://localhost:5000/api/wishlist/${item.id}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== item.id));
      alert(`${item.title} removed from Wishlist`);
    } catch (error) {
      console.error('Error deleting from wishlist:', error);
      alert('Error removing from Wishlist. Please try again.');
    }
  };

  const handleLogout = () => {
    navigate('/simracinglogin');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Welcome to the Sim Racing Store!</h2>
      <nav style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button onClick={() => handleCategorySelect('wheels')}>Wheels</button>
        <button onClick={() => handleCategorySelect('pedals')}>Pedals</button>
        <button onClick={() => handleCategorySelect('cockpits')}>Cockpits</button>
        <button onClick={() => handleCategorySelect('wishlist')}>Wish List</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Render the selected category component */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {filteredProducts.map((item, index) => (
          <Card
            key={index}
            item={item}
            onAddToWishlist={handleAddToWishlist}
            onDeleteFromWishlist={handleDeleteFromWishlist}
            isInWishlist={selectedCategory === 'wishlist'}
          />
        ))}
      </div>
    </div>
  );
};

export default SimRacingDashboard;
