import React from "react";
import Cart from './components/Cart';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom'
import "./style.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
