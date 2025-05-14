import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import OrderStatus from './pages/OrderStatus';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import Orders from './pages/Orders';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Layout />}>
            <Route index element={<Menu />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="order-status" element={<OrderStatus />} />
            <Route path="orders" element={<Orders />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
