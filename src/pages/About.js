import React from "react";
import { Paper, Typography } from "@mui/material";

const About = () => {
  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>
      <Typography paragraph>
        This Loan Calculator App is a modern, single-page web application built
        using <strong>React JS</strong> and <strong>Material UI</strong>. It
        allows users to calculate loan EMIs (Equated Monthly Installments), view
        a detailed amortization schedule, and see real-time currency conversions
        of their EMI using live exchange rates.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Features
      </Typography>
      <Typography component="ul" paragraph>
        <li>Loan EMI calculation using standard financial formulas</li>
        <li>Dynamic amortization schedule table with monthly breakdown</li>
        <li>
          Real-time currency conversion of EMI using a live exchange rate API
        </li>
        <li>Paginated exchange rate table for 160+ currencies</li>
        <li>Dark/Light mode toggle for a customizable experience</li>
        <li>Collapsible header navigation on mobile screens</li>
        <li>Fully responsive UI built with Material UI</li>
      </Typography>

      <Typography variant="h5" gutterBottom>
        Technologies Used
      </Typography>
      <Typography component="ul" paragraph>
        <li>
          <strong>React</strong> (Hooks, Routing, Context API)
        </li>
        <li>
          <strong>Material UI</strong> for styling and responsive components
        </li>
        <li>
          <strong>Axios</strong> for API calls
        </li>
        <li>
          <strong>Exchange Rate API</strong> for real-time currency conversion
        </li>
      </Typography>

      <Typography variant="h5" gutterBottom>
        EMI Formula Used
      </Typography>
      <Typography paragraph>
        The EMI (Equated Monthly Installment) is calculated using the standard
        formula:
      </Typography>
      <Typography paragraph sx={{ fontFamily: "monospace" }}>
        EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
      </Typography>
      <Typography paragraph>Where:</Typography>
      <Typography component="ul" paragraph>
        <li>P = Principal loan amount</li>
        <li>R = Monthly interest rate (annual rate / 12 / 100)</li>
        <li>N = Loan duration in months</li>
      </Typography>
    </Paper>
  );
};

export default About;
