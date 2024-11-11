import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  );
}

export default App;
