// src/components/Wheels.js
import React from 'react';

const Wheels = ({ products }) => {
  return (
    <div>
      <h2>Wheels</h2>
      {products.map((wheel, index) => (
        <div key={index}>
          <h3>{wheel.title}</h3>
          <p>{wheel.description}</p>
          <img src={wheel.img} alt="Wheel Model" />
          <p>Price: ${wheel.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Wheels;
