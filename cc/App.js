import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Routings from './components/Routings'; // Renamed import
import Departments from './components/Bookings';
import Bookings from './components/Bookings'; // Assuming you have this component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/routes" element={<Routings />} /> {/* Use renamed component here */}
        <Route path="/departments" element={<Departments />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
}

export default App;