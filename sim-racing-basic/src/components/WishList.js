// src/components/Wishlist.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wishlist = () => {
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/wishlist');
        setWishlistData(response.data);
      } catch (error) {
        console.error('Error fetching wishlist data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistData.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
