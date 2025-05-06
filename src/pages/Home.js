import React from "react";
import LoanCalculatorForm from "../components/LoanCalculatorForm";
import AmortizationTable from "../components/AmortizationTable";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        padding: "0 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", marginTop: "10px" }}>
        <LoanCalculatorForm />
        <AmortizationTable />
      </div>
    </div>
  );
};

export default Home;
