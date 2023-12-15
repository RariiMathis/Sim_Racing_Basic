// src/components/Cockpits.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cockpits = ({ products }) => {
  return (
    <div>
      <h2>Cockpits</h2>
      {products.map((cockpit, index) => (
        <div key={index}>
          <h3>{cockpit.title}</h3>
          <p>{cockpit.description}</p>
          {/* Assuming 'modelImage' and 'price' are properties in your data */}
          <img src={cockpit.img} alt="Cockpit Model" />
          <p>Price: ${cockpit.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cockpits;
