import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation/Navigation';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Calculator from './Pages/Calculator';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path="/calculator" element={<Calculator/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}