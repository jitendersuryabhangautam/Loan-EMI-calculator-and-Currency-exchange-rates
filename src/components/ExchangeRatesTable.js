import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useExchangeRates } from "../hooks/useExchangeRates";

const ExchangeRatesTable = () => {
  const { rates, loading, error, page, setPage, rowsPerPage, setRowsPerPage } =
    useExchangeRates();
  console.log("this is the rates coming from exchange rates table", rates);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Live Exchange Rates (Base: USD)
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell>Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rates
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rate) => (
                <TableRow key={rate.currency}>
                  <TableCell>{rate.currency}</TableCell>
                  <TableCell>{rate.rate}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={rates.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ExchangeRatesTable;
