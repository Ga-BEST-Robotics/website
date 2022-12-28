import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../components/Copyright';
import Toolbar from '@mui/material/Toolbar';
import NavBar from '../components/NavBar';


export default function Index(props) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <NavBar />
        <Toolbar />
        <Typography>
          Website content coming soon!
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
