import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Emicalculator from './components/Emicalculator';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/emicalculator" element={<Emicalculator />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
