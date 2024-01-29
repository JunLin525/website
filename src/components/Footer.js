import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{backgroundColor:'grey'}} component="footer" bgcolor="primary.main" color="white" py={3}>
      <Container>
        <Box display='block'>
        <Typography variant="h7">10666 台北市大安區復興南路一段205號4樓</Typography>
        </Box>
        <Box display='block'>  
        <Typography variant="body">TEL: +886-2-8772-8990</Typography>
        </Box>
        <Box display='block'>  
        <Typography variant="body">FAX: +886-2-8772-5563</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;