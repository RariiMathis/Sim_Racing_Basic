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

  // Array of link data
  const links = [
    {
      title: "Visit Logitech's Website",
      description: "Explore a variety of products on Logitech's official website.",
      url: 'https://www.logitech.com/en-us',
    },
    {
      title: "Visit Fanatec's Website",
      description: "Discover high-quality sim racing equipment on Fanatec's official website.",
      url: 'https://fanatec.com/us-en/',
    },
    {
      title: "Visit Playseat's Website",
      description: "Immersed in the thrill of sim racing equipment on Playseat's official website.",
      url: 'https://playseat.com/',
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {/* Map over the array of links to generate cards */}
      {links.map((link, index) => (
        <div key={index} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '20px' }}>
          <h3>{link.title}</h3>
          <p>{link.description}</p>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      ))}

      <div style={{ marginBottom: '60px' }}>
        {/* Wishlist items */}
        <h3>Wishlist</h3>
        {wishlistData.length === 0 ? (
          <p>No items in the wishlist</p>
        ) : (
          wishlistData.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              {/* Add a dynamic link to the product's website */}
              {item.website && (
                 <a href={item.website} target="_blank" rel="noopener noreferrer">
                  View on Website
                </a>
              )}
              <hr style={{ margin: '10px 0' }} />
            </div>
          ))
        )}
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
