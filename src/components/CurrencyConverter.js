import React, { useContext } from "react";
import { Typography, Paper } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";

const CurrencyConverter = () => {
  const { emi, currency } = useContext(AppContext);
  const { convertedEmi } = useCurrencyConverter();
  console.log("this is the data in convertedEmi", convertedEmi);

  if (!emi || emi <= 0) {
    return null;
  }

  return (
    <Paper elevation={0} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6">
        Converted EMI: {Number(convertedEmi).toFixed(2)} {currency}
      </Typography>
    </Paper>
  );
};

export default CurrencyConverter;
