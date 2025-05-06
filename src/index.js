import React from "react";
import ReactDOM from "react-dom/client"; // React 18+
import App from "./App";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeContext";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      {(theme) => (
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      )}
    </CustomThemeProvider>
  </React.StrictMode>
);
