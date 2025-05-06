import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              mx: 1,
              backgroundColor: "#3888D8",
              color: "white",
              "&:hover": {
                backgroundColor: "#add8e6",
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/exchange-rates"
            sx={{ mx: 1 }}
          >
            Exchange Rates (LIVE)
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ mx: 1 }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/error" sx={{ mx: 1 }}>
            Error Page
          </Button>
        </Box>
        <Box sx={{ ml: 1 }}>
          <Box sx={{ ml: 1 }}>
            <Switch
              checked={mode === "dark"}
              onChange={toggleColorMode}
              color="default"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
