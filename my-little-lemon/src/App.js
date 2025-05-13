import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { OrderProvider } from './pages/OrderContext';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Reservation from './pages/Reservation';
import Form from './pages/Form';
import Confirmation from './pages/Confirmation';
import SignIn from './pages/SignIn';
import PlaceOrder from './pages/PlaceOrder';
import OrderConfirmatio from './pages/OrderConfirmatio';

function App() {
  return (
    <OrderProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/form" element={<Form />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/login" element={<Login />} />*
        /*<Route path="/signin" element={<SignIn />} />*/}
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/orderconfirmation" element={<OrderConfirmatio />} />
      </Routes>
    </OrderProvider>
  );
}

export default App;
