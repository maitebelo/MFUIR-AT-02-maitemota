import React from "react";
import { Typography, Container } from "@mui/material";

const footerStyles = {
  padding: '1rem',
  marginTop: 'auto',
  backgroundColor: '#eee',
  textAlign: 'center',
  bottom: 0,
  left: 0,
  right: 0,
};

function Footer() {
  return (
    <footer style={footerStyles}>
      <Container maxWidth="sm">
        <Typography variant="body1">Direitos Reservados</Typography>
      </Container>
    </footer>
  );
}

export default Footer;
