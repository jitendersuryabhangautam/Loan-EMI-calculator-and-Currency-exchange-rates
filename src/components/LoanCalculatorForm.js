import React, { useContext } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useAmortization } from "../hooks/useAmortization";

const LoanCalculatorForm = () => {
  const {
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
    setAmortizationSchedule,
  } = useContext(AppContext);

  const { generateAmortizationSchedule } = useAmortization();

  const handleCalculate = () => {
    generateAmortizationSchedule();
  };

  const handleReset = () => {
    setLoanAmount(100000);
    setInterestRate(8.5);
    setLoanTerm(5);
    setEmi(0);
    setAmortizationSchedule([]);
  };

  return (
    <Paper elevation={0} sx={{ p: 2, mb: 3 }}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>
      <Grid container spacing={3} direction="column">
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", gap: 2, width: "60%" }}
        >
          <TextField
            fullWidth
            label="Loan Amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
            InputProps={{ inputProps: { min: 0 } }}
          />
          <TextField
            fullWidth
            label="Interest Rate (%)"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            InputProps={{ inputProps: { min: 0, step: 0.1 } }}
          />
          <TextField
            fullWidth
            label="Term (Years)"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
            InputProps={{ inputProps: { min: 1 } }}
          />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", gap: 2, width: "20%" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            fullWidth
            size="large"
          >
            CALCULATE
          </Button>
        </Grid>

        {emi > 0 && (
          <>
            <Grid item xs={12}>
              <Typography variant="h6">
                Monthly EMI: {currency} {Number(emi).toFixed(2)}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "space-between",
              }}
            >
              <FormControl sx={{ width: "6%" }}>
                <InputLabel>Currency</InputLabel>
                <Select
                  value={currency}
                  label="Currency"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="GBP">GBP</MenuItem>
                  <MenuItem value="JPY">JPY</MenuItem>
                  <MenuItem value="INR">INR</MenuItem>
                  <MenuItem value="AUD">AUD</MenuItem>
                  <MenuItem value="CAD">CAD</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleReset}
                sx={{ width: "150px", padding: "12px" }}
              >
                RESET TABLE
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Paper>
  );
};

export default LoanCalculatorForm;
