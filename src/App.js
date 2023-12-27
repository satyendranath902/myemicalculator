import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Emicalculator from './components/Emicalculator';
import InterestCalculator from './components/InterestCalculator';
import Nasa from './components/Nasa';
import Deviceinfo from './components/Deviceinfo';
import { ThemeProvider } from './components/ThemeContext';
import Calculator from './components/Calculator';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Emicalculator></Emicalculator>} />
        <Route path="/interestcalculator" element={<InterestCalculator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/nasa" element={<Nasa />} />
        <Route path="/deviceinfo" element={<Deviceinfo />} />        
        <Route path="/payment" element={<Payment />} />
        
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
