import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AppProvider } from "./context/AppContext";
import { CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import ExchangeRates from "./pages/ExchangeRates";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider>
      {(theme) => (
        <AppProvider>
          <Router>
            <CssBaseline />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchange-rates" element={<ExchangeRates />} />
              <Route path="/about" element={<About />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </AppProvider>
      )}
    </ThemeProvider>
  );
};

export default App;
