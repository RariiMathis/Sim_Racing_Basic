// src/components/Wheels.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wheels = () => {
  const [wheelsData, setWheelsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/wheels');
        setWheelsData(response.data);
      } catch (error) {
        console.error('Error fetching wheels data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Wheels</h2>
      {wheelsData.map((wheel, index) => (
        <div key={index}>
          <h3>{wheel.title}</h3>
          <p>{wheel.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Wheels;
