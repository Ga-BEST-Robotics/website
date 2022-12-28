import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome-icons'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function NavBar(props) {
  return (
    <ElevationScroll {...props}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Georgia BEST Robotics
          </Typography>
          <Box sx={{display: 'flex'}}>
            <Button
              href="#events"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Events
            </Button>
            <Button
              href="#what-is-best"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              What is BEST?
            </Button>
            <Button
              href="#sponsors"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Sponsors
            </Button>
            <Button
              href="#teams"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Teams
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Support
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Participate
            </Button>
            <Button
              href="#contact-us"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contact Us
            </Button>
          </Box>
          <Box sx={{display: 'flex'}}>
            <IconButton>
              <FontAwesomeIcon icon={["fab", "facebook"]} inverse title="Georgia BEST Facebook page" />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={["fab", "twitter"]} inverse title="Georgia BEST Twitter account" />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={["fab", "flickr"]} inverse title="Georgia BEST Flickr account" />
            </IconButton>
            <IconButton>
              <FontAwesomeIcon icon={["fab", "linkedin"]} inverse title="Georgia BEST LinkedIn page" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}