import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAmortization = () => {
  const {
    loanAmount,
    interestRate,
    loanTerm,
    emi,
    setEmi,
    setAmortizationSchedule,
  } = useContext(AppContext);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const termInMonths = loanTerm * 12;
    const emiValue =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) /
      (Math.pow(1 + monthlyRate, termInMonths) - 1);
    setEmi(emiValue.toFixed(2));
    return emiValue;
  };

  const generateAmortizationSchedule = () => {
    const monthlyRate = interestRate / 12 / 100;
    const termInMonths = loanTerm * 12;
    const emiValue = calculateEMI();
    let balance = loanAmount;
    const schedule = [];

    for (let month = 1; month <= termInMonths; month++) {
      const interest = balance * monthlyRate;
      const principal = emiValue - interest;
      balance -= principal;

      schedule.push({
        month,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        remainingBalance: Math.abs(balance).toFixed(2),
      });
    }

    setAmortizationSchedule(schedule);
    return schedule;
  };

  return { calculateEMI, generateAmortizationSchedule };
};
