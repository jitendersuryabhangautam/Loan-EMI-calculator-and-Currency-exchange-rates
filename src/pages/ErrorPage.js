import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">
        Something went wrong in the application.
      </Typography>

      <Button
        variant="outlined"
        component={Link}
        to="/"
        sx={{
          borderColor: "primary.main",
          color: "primary.main",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
            borderColor: "primary.main",
          },
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default ErrorPage;
