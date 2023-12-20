import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card = ({ imgSrc, brand, model, price }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '200px', textAlign: 'center' }}>
    <img src={imgSrc} alt={`${brand} ${model}`} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
    <p>{brand} {model}</p>
    <p>${price}</p>
  </div>
);

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

  const handleAction = async () => {
    if (isCreatingAccount) {
      if (driverName && driverPassword && confirmPassword === driverPassword && email) {
        try {
          // Make a POST request to the server
          await axios.post('http://127.0.0.1:5000/api/users', {
            username: driverName,
            email: email,
            password: driverPassword,
          });

          // If the request is successful, navigate to the dashboard
          navigate('/dashboard');
        } catch (error) {
          console.error('Error creating account:', error);
          alert('Error creating account. Please try again.');
        }
      } else {
        alert('Invalid account information. Please make sure all fields are filled and passwords match.');
      }
    } else {
      // Handle login logic here
      if (driverName && driverPassword) {
        navigate('/dashboard');
      } else {
        alert('Invalid credentials. Please enter a valid driver name and team password.');
      }
    }
  };

  const wheelsData = [
    { imgSrc: 'https://betanews.com/wp-content/uploads/2020/08/g923-01.png', brand: 'Logitec', model: 'G923', price: 349.99 },
    // Add more wheel data items as needed
  ];

  const pedalsData = [
    { imgSrc: 'https://live.staticflickr.com/8524/29247468925_cd8a6ea8b6_k.jpg', brand: 'Fanatec', model: 'CSL Pedals LC', price: 199.95 },
    // Add more pedals data items as needed
  ];

  const cockpitsData = [
    { imgSrc: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ccJG-+OaL._AC_SX569_.jpg', brand: 'Playseat', model: 'Playseat Challenge SimRacing Cockpit', price: 259.99 },
    // Add more cockpit data items as needed
  ];

  return (
    <div
  style={{
    textAlign: 'center',
    background: '#fffff', 
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>

      {/* Video component in the lower-left corner */}
      <div style={{ position: 'absolute', center: 0, bottom: -800, left: 650, width: '300px', height: '525px', marginBottom: '20px' }}>
        <iframe
          width="300%"
          height="100%"
          src="https://www.youtube.com/embed/rLfkPntDlO8?si=TE2Gm4vLQSNYaULS"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Image component in the lower-right corner */}
      <div style={{ position: 'absolute', left: -40, bottom: 0, width: '400px', height: '325px', marginBottom: '20px' }}>
        <img
          src="https://mma.prnewswire.com/media/1086799/iRacing_Blue_Horizontal_R_Logo.jpg?p=facebook"  
          alt="Image 1"
          style={{ position: 'absolute', right: -255, bottom: -70, width: '150%', height: '50%', objectFit: 'cover', marginBottom: '25px' }}
        />
      </div>
      <div style={{ position: 'absolute', left: -40, bottom: 0, width: '400px', height: '325px', marginBottom: '20px' }}>
        <img
          src="https://www.mkaugaming.com/wp-content/uploads/2020/06/104970298_4656395647720050_7891966064154370144_o.jpg"  
          alt="Image 2"
          style={{ position: 'absolute', right: -255, bottom: 200, width: '150%', height: '50%', objectFit: 'cover', marginBottom: '25px' }}
        />
      </div>
      <div style={{ position: 'absolute', left: -40, bottom: 0, width: '400px', height: '325px', marginBottom: '20px' }}>
        <img
          src="https://logosmarcas.net/wp-content/uploads/2021/04/Forza-Emblema.jpg"  
          alt="Image 3"
          style={{ position: 'absolute', right: -255, bottom: -300, width: '150%', height: '50%', objectFit: 'cover', marginBottom: '25px' }}
        />
      </div>

      {/* Content in the center */}
      <div style={{ marginLeft: '320px', marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Banner with Race Car Image */}
        <img src="https://traxion.gg/wp-content/uploads/2022/05/cars.jpg" alt="Racing" style={{ width: '140%', maxHeight: '300px', objectFit: 'cover', marginBottom: '20px' }} />

        <h1>Your one stop to start your Sim Racing Car</h1>

        {/* Display Wheels, Pedals, and Cockpits cards */}
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {/* Display Wheel cards */}
          {wheelsData.slice(0, 5).map((wheel, index) => (
            <Card key={`wheel-${index}`} {...wheel} />
          ))}

          {/* Display Pedals cards */}
          {pedalsData.slice(0, 5).map((pedal, index) => (
            <Card key={`pedal-${index}`} {...pedal} />
          ))}

          {/* Display Cockpit cards */}
          {cockpitsData.slice(0, 5).map((cockpit, index) => (
            <Card key={`cockpit-${index}`} {...cockpit} />
          ))}
        </div>

        <p>Welcome to the world of simulation racing this page was made to help those who are new.</p>
        <p>When I began my jouney I wish there was a site like this to help guild me on my purchases</p>
        <p>and not wasting money on things that things that did not add to the experience.</p>
        <p>With that all said let's start your career</p>
        <h2>{isCreatingAccount ? 'Create Account' : 'Sim Racing Basic'}</h2>
        <label style={{ marginBottom: '20px', display: 'block', textAlign: 'center', width: '100%' }}>
  Driver's Name:
  <input type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} style={{ width: '19%', marginTop: '5px' }} />
</label>

{isCreatingAccount && (
  <>
    <label style={{ marginBottom: '20px', display: 'block', textAlign: 'center', width: '100%' }}>
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '15%', marginTop: '5px' }} />
    </label>
  </>
)}

<label style={{ marginBottom: '20px', display: 'block', textAlign: 'center', width: '100%' }}>
  Driver's Password:
  <input type="password" value={driverPassword} onChange={(e) => setDriverPassword(e.target.value)} style={{ width: '20%', marginTop: '5px' }} />
</label>

{isCreatingAccount && (
  <>
    <label style={{ marginBottom: '20px', display: 'block', textAlign: 'center', width: '100%' }}>
      Confirm Password:
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: '20%', marginTop: '5px' }} />
    </label>
  </>
)}
        <br />
        <button onClick={handleAction} style={{ width: '100px', marginBottom: '10px' }}>
          {isCreatingAccount ? 'Create Account' : 'Login'}
        </button>
        <br />
        <button onClick={handleToggleMode} style={{ marginTop: '5px' }}>
          {isCreatingAccount ? 'Already have an account? Login' : 'Create Account'}
        </button>
      </div>
    </div>
  );
};

export default SimRacingLogin;




