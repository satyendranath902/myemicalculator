import React, { useState } from 'react';

const Emicalculator = () => {
  const [principalAmount, setPrincipalAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emiResult, setEmiResult] = useState(null);
  

  const calculateEMI = () => {
    const principal = parseFloat(principalAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm);

    if (principal && rate && term) {
      const emi = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      setEmiResult(emi.toFixed(2));
    } else {
      setEmiResult(null);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculateEMI();
  };

  return (
    <div className="login-container" >      
      <h2>EMI Calculator</h2>
      <form onSubmit={handleCalculate}>
        <div className="input-group">
          <label>Principal Amount:</label>
          <input
            type="number"
            value={principalAmount}
            onChange={(e) => setPrincipalAmount(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (per annum):</label>
          <input
            type="number"
            step="any" // Allow decimal inputs
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Loan Term (in months):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {emiResult && (
        <div>
          <h3>EMI:</h3>
          <p>{emiResult} / month</p>
        </div>
      )}
       
    </div>
  );
};

export default Emicalculator;
