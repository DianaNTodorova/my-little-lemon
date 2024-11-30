import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Reservation from './pages/Reservation';
import Form from './pages/Form';
import Confirmation from './pages/Confirmation';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/form" element={<Form />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
