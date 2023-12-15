// src/components/Pedals.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pedals = () => {
  const [pedalsData, setPedalsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/pedals');
        setPedalsData(response.data);
      } catch (error) {
        console.error('Error fetching pedals data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pedals</h2>
      {pedalsData.map((pedal, index) => (
        <div key={index}>
          <h3>{pedal.title}</h3>
          <p>{pedal.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Pedals;
