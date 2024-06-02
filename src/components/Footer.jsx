import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <AppBar position="relative" className="footer-appbar">
      <Container maxWidth="md">
        <Toolbar className="footer-toolbar">
          <Typography variant="body1" color="#280003">
            &copy; 2024 Nurture Innovation Capital Limited. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
