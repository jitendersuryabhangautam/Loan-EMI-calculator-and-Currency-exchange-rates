import { useState, useEffect } from "react";
import axios from "axios";

export const useExchangeRates = (baseCurrency = "USD") => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        // Note: Replace with your actual API key
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/5ecd81b5b8ec51e67574889f/latest/${baseCurrency}`
        );
        const ratesData = Object.entries(response.data.conversion_rates).map(
          ([currency, rate]) => ({
            currency,
            rate,
          })
        );
        setRates(ratesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return {
    rates,
    loading,
    error,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
  };
};
