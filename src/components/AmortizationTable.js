import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useTheme } from "@mui/material/styles";

const AmortizationTable = () => {
  const { amortizationSchedule, currency } = useContext(AppContext);
  const theme = useTheme();

  if (!amortizationSchedule || amortizationSchedule.length === 0) {
    return null;
  }

  return (
    <Paper elevation={1} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Amortization Schedule ({currency})
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 400, overflow: "auto" }}
      >
        <Table>
          <TableHead
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Principal</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {amortizationSchedule.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell>
                  {row.principal} {currency}
                </TableCell>
                <TableCell>
                  {row.interest} {currency}
                </TableCell>
                <TableCell>
                  {row.remainingBalance} {currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AmortizationTable;
