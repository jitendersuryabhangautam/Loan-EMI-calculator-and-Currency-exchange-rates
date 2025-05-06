import React, { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: { main: "#1976d2" },
                secondary: { main: "#9c27b0" },
                background: {
                  default: "#f5f5f5",
                  paper: "#ffffff",
                },
              }
            : {
                primary: { main: "#90caf9" },
                secondary: { main: "#ce93d8" },
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children(theme)}
    </ColorModeContext.Provider>
  );
};
