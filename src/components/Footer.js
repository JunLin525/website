import React from 'react';
import { Container, Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{backgroundColor:'grey'}} component="footer" bgcolor="primary.main" color="white" py={3}>
      <Container>
        <Box display='block'>
        <Typography variant="h7">4th Floor, No. 205, Section 1, Fuxing South Road, Da'an District, Taipei City 10666, Taiwan</Typography>
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