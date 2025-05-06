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
          borderColor: "primary.main", // Set border color to the primary color
          color: "primary.main", // Set text color to primary color
          "&:hover": {
            backgroundColor: "primary.main", // On hover, set background to primary color
            color: "white", // Change text color to white on hover
            borderColor: "primary.main", // Keep the border color on hover
          },
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default ErrorPage;
