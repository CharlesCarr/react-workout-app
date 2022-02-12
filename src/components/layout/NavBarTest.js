import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

// import { createTheme } from '@mui/material/styles';
// import { blueGrey } from '@mui/material/colors';

import { Link } from "react-router-dom";

const pages = ['New Workout', 'All Workouts', 'New Plan'];



const NavBarTest = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            WORKOUT APP
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            WORKOUT APP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}

            <Link to="/"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>New Workout</Button></Link>
            <Link to="/all-workouts"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>All Workouts</Button></Link>
            <Link to="/new-plan"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>New Plan</Button></Link>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

            <Link to="/"><MenuItem onClick={handleCloseNavMenu}><Typography textAlign="center">New Workout</Typography></MenuItem></Link>
            <Link to="/all-workouts"><MenuItem onClick={handleCloseNavMenu}><Typography textAlign="center">All Workouts</Typography></MenuItem></Link>
            <Link to="/new-plan"><MenuItem onClick={handleCloseNavMenu}><Typography textAlign="center">New Plan</Typography></MenuItem></Link>
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBarTest;