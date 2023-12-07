// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimRacingLogin from './components/SimRacingLogin';
import SimRacingDashboard from './components/SimRacingDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<SimRacingDashboard />} />
        <Route path="/" element={<SimRacingLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
