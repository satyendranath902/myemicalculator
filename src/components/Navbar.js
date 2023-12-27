import React from 'react';
import '.././App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav>
      <ul>
        <li className='horizontalTab'><Link to="/">EmiCalculator</Link></li>    
        <li className='horizontalTab'><Link to="/interestcalculator">InterestCalculator</Link></li>     
        <li className='horizontalTab'><Link to="/payment">Payment</Link></li>
        <li className='horizontalTab'><Link to="/nasa">NASA</Link></li>
        <li className='horizontalTab'><Link to="/deviceinfo">Your Device</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
