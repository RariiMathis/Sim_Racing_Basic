import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Wishlist from './WishList';


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
    <div style={{ textAlign: 'center' }}>
      {/* Banner with Race Car Image */}
      <img src="https://traxion.gg/wp-content/uploads/2022/05/cars.jpg" alt="Race Car" style={{ width: '100%', maxHeight: '250px', objectFit: 'cover', marginBottom: '5px' }} />

      <h2>Welcome to the Sim Racing Store!</h2>
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'center' }}>
  {['wheels', 'pedals', 'cockpits', 'wishlist'].map((category) => (
    <button
      key={category}
      onClick={() => handleCategorySelect(category)}
      className={selectedCategory === category ? 'active-tab' : ''}
      style={{
        width: '300px',
        height: '75px',
        backgroundColor: getCategoryColor(category),
        color: '#fff',
        marginRight: '50px', // Adjust the right margin as needed
      }}
    >
      {capitalizeFirstLetter(category)}
    </button>
  ))}
  <button onClick={handleLogout} style={{ width: '80px', height: '40px', backgroundColor: '#34495e', color: '#fff' }}>
    Logout
  </button>
</div>

      {/* Search Bar */}
      <input
  type="text"
  placeholder="Search for products"
  value={searchTerm}
  onChange={handleSearch}
  style={{ width: '300px', marginBottom: '25px' }} // Adjust the width as needed
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

      {/* Render Wishlist component at the bottom */}
      {selectedCategory === 'wishlist' && (
        <Wishlist />
      )}

    </div>
  );
};


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getCategoryColor(category) {
  switch (category) {
    case 'wheels':
      return '#3498db';
      case 'pedals':
        return '#2ecc71';
        case 'cockpits':
          return '#e74c3c';
          case 'wishlist':
            return '#f39c12';
            default:
              return '#fff';
            }
          }
          
          export default SimRacingDashboard;