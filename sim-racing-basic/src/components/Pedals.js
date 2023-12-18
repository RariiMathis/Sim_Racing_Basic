// src/components/Pedals.js
import React from 'react';

const Pedals = ({ products }) => {
  return (
    <div>
      <h2>Pedals</h2>
      {products.map((pedal, index) => (
        <div key={index}>
          <h3>{pedal.title}</h3>
          <p>{pedal.description}</p>
          <img src={pedal.img} alt="Pedal Model" />
          <p>Price: ${pedal.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Pedals;
