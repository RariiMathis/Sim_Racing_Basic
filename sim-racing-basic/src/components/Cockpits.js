// src/components/Cockpits.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cockpits = () => {
  const [cockpitsData, setCockpitsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/cockpits');
        setCockpitsData(response.data);
      } catch (error) {
        console.error('Error fetching cockpits data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div>
      <h2>Cockpits</h2>
      {cockpitsData.map((cockpit, index) => (
        <div key={index}>
          <h3>{cockpit.title}</h3>
          <p>{cockpit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cockpits;
