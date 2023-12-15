import React, { useState } from 'react';

const InterestCalculator = () => {
  const [principalAmount, setPrincipalAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateMaturityAmount = () => {
    const principal = parseFloat(principalAmount);
    const rate = parseFloat(interestRate) / 100;
    const time = parseFloat(timePeriod);

    if (principal && rate && time) {
      const maturityValue = (principal * (1 + rate * time)).toFixed(2);
      setMaturityAmount(maturityValue);
    } else {
      setMaturityAmount(null);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculateMaturityAmount();
  };

  return (
    <div className="login-container">
      <h2>Fixed Deposit Calculator</h2>
      <form onSubmit={handleCalculate}>
        <div>
          <label>Principal Amount:</label>
          <input
            type="number"
            step="any"
            value={principalAmount}
            onChange={(e) => setPrincipalAmount(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (per annum):</label>
          <input
            type="number"
            step="any"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Time Period (in years):</label>
          <input
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate Maturity Amount</button>
      </form>
      {maturityAmount && (
        <div>
          <h3>Maturity Amount:</h3>
          <p>{maturityAmount}</p>
        </div>
      )}
    </div>
  );
};

export default InterestCalculator;
