import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SimRacingLogin = () => {
  const [driverName, setDriverName] = useState('');
  const [driverPassword, setDriverPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const navigate = useNavigate();

  const handleToggleMode = () => {
    setIsCreatingAccount(!isCreatingAccount);
  };

  const handleAction = () => {
    if (isCreatingAccount) {
      // Add your create account logic here
      if (driverName && driverPassword && confirmPassword === driverPassword && email) {
        // Redirect to sim racing dashboard after successful account creation
        navigate('/dashboard');
      } else {
        alert('Invalid account information. Please make sure all fields are filled and passwords match.');
      }
    } else {
      // Add your sim racing login logic here
      if (driverName && driverPassword) {
        // Redirect to sim racing dashboard after successful login
        navigate('/dashboard');
      } else {
        alert('Invalid credentials. Please enter a valid driver name and team password.');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* Banner with Race Car Image */}
      <img src="https://traxion.gg/wp-content/uploads/2022/05/cars.jpg" alt="R8" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', marginBottom: '20px' }} />

      <h1>Your one stop to start your Sim Racing Car</h1>

      <h2>{isCreatingAccount ? 'Create Account' : 'Sim Racing Basic'}</h2>
      <label style={{ marginBottom: '20px' }}>
        Driver's Name:
        <input type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} />
      </label>
      {isCreatingAccount && (
        <>
          <label style={{ marginBottom: '10px' }}>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </>
      )}
      <label style={{ marginBottom: '30px' }}>
        Driver's Password:
        <input type="password" value={driverPassword} onChange={(e) => setDriverPassword(e.target.value)} />
      </label>
      {isCreatingAccount && (
        <>
          <label style={{ marginBottom: '50px' }}>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
        </>
      )}
      <br />
      <button onClick={handleAction} style={{ width: '100px', marginBottom: '10px' }}>{isCreatingAccount ? 'Create Account' : 'Login'}</button>
      <br />
      <button onClick={handleToggleMode} style={{ marginTop: '5px' }}>
        {isCreatingAccount ? 'Already have an account? Login' : 'Create Account'}
      </button>
    </div>
  );
};

export default SimRacingLogin;