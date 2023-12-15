import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimRacingDashboard from './components/SimRacingDashboard';
import SimRacingLogin from './components/SimRacingLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<SimRacingDashboard />} />
        <Route path="/simracinglogin" element={<SimRacingLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
