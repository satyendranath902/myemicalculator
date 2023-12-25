import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Emicalculator from './components/Emicalculator';
import InterestCalculator from './components/InterestCalculator';
import Nasa from './components/Nasa';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Emicalculator></Emicalculator>} />
        <Route path="/interestcalculator" element={<InterestCalculator />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/nasa" element={<Nasa />} />
      </Routes>
    </Router>
  );
}

export default App;
