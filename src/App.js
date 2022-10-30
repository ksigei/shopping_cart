import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import './style.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
