// src/components/Wishlist.js

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Wishlist = () => {
  const [wishlistData, setWishlistData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/wishlist');
        setWishlistData(response.data);

        // Calculate the total price
        const total = response.data.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching wishlist data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ marginBottom: '60px' }}>
        {/* Wishlist items */}
        <h3>Cost of all items</h3>
        {wishlistData.length === 0 ? (
          <p>No items in the wishlist</p>
        ) : (
          wishlistData.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          ))
        )}
        <hr style={{ margin: '10px 0' }} />
      </div>
      {/* Card for Total Price */}
      <div
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          textAlign: 'right',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        <h2>Total</h2>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Wishlist;




