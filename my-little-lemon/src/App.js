import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Form from './pages/Form';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/form" element={<Form />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
