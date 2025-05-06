import React from "react";
import { Alert, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Alert severity="warning" sx={{ mb: 3 }}>
        <Typography variant="h4">404 - Page Not Found</Typography>
      </Alert>
      <Typography variant="body1" paragraph>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
