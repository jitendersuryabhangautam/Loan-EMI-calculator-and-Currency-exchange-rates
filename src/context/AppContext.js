import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [convertedEmi, setConvertedEmi] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  return (
    <AppContext.Provider
      value={{
        loanAmount,
        setLoanAmount,
        interestRate,
        setInterestRate,
        loanTerm,
        setLoanTerm,
        emi,
        setEmi,
        currency,
        setCurrency,
        convertedEmi,
        setConvertedEmi,
        amortizationSchedule,
        setAmortizationSchedule,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
