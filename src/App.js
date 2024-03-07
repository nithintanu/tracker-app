

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import PastOrders from './Components/PastOrders';
import PendingOrders from './Components/PendingOrders';
import CurrentOrders from './Components/CurrentOrders';
import Restaurants from './Components/Restaurants';
import Dashboard from './Components/Dashboard';

function App() {
  const [width, setWidth] = useState('950px');
  // const [width, setWidth] = useState('900px');
  const [marginLeft, setMarginLeft] = useState('10%');


  const handleClick = () => {
    // Update width
    setWidth(prevWidth => prevWidth === '950px' ? '1200px' : '950px');
    // Update marginLeft
    setMarginLeft(prevMarginLeft => prevMarginLeft === '10%' ? '1%' : '10%');
  };

  return (
    <BrowserRouter>
      {/* Navbar is rendered outside the Routes */}
      <Navbar setWidth={setWidth} handleClick={handleClick} />
      <Routes>
        {/* Nested Route elements */}
        <Route path="/DashBoard" element={<Dashboard/>}/>
        <Route path="/CurrentOrders" element={<CurrentOrders   width={width} marginLeft={marginLeft}/>} />
        <Route path="/PastOrders" element={<PastOrders width={width} marginLeft={marginLeft}/>} />
        <Route path="/PendingOrders" element={<PendingOrders width={width} marginLeft={marginLeft}/>} />
        <Route path="/Restaurants" element={<Restaurants width={width} marginLeft={marginLeft}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
