import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

export const useCurrencyConverter = () => {
  const { emi, currency, setConvertedEmi, convertedEmi } =
    useContext(AppContext);

  useEffect(() => {
    const convertEmi = async () => {
      if (emi > 0 && currency !== "USD") {
        try {
          // Note: Replace with your actual API key
          const response = await axios.get(
            `https://v6.exchangerate-api.com/v6/5ecd81b5b8ec51e67574889f/latest/USD`
          );
          const rate = response.data.conversion_rates[currency];
          setConvertedEmi(Number((emi * rate).toFixed(2)));
        } catch (error) {
          console.error("Error converting currency:", error);
          setConvertedEmi(Number(emi).toFixed(2));
        }
      } else {
        setConvertedEmi(Number(emi).toFixed(2));
      }
    };

    convertEmi();
  }, [emi, currency, setConvertedEmi]);

  return { convertedEmi: Number(convertedEmi) || emi };
};
