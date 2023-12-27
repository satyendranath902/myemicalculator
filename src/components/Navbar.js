import React from 'react';
import '.././App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav>
      <ul>
        <li className='horizontalTab'><Link to="/">EMI-Calculator</Link></li>    
        <li className='horizontalTab'><Link to="/interestcalculator">Interest-Calculator</Link></li>   
        <li className='horizontalTab'><Link to="/calculator">Calculator</Link></li>        
        <li className='horizontalTab'><Link to="/nasa">NASA</Link></li>
        <li className='horizontalTab'><Link to="/deviceinfo">Your Device</Link></li>
        <li className='horizontalTab'><Link to="/payment">Payment</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
