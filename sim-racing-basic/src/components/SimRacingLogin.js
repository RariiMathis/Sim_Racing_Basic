// src/components/SimRacingLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SimRacingLogin = () => {
  const [driverName, setDriverName] = useState('');
  const [driverPassword, setdriverPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your sim racing login logic here
    // For simplicity, let's just check if the driverName and driverPassword are not empty
    if (driverName && driverPassword) {
      // Redirect to sim racing dashboard after successful login
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please enter a valid driver name and team password.');
    }
  };

  return (
    <div>
      <h2>Sim Racing Basic</h2>
      <label>
        Driver's Name:
        <input type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} />
      </label>
      <br />
      <label>
        Driver's Password:
        <input type="password" value={driverPassword} onChange={(e) => setdriverPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SimRacingLogin;
