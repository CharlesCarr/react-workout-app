import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import classes from "./NavBarTest.module.css";
import { ThemeProvider } from '@mui/material/styles';

const NavBarTest = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const darkPrimary = props.theme.palette.primary.dark;
  console.log(darkPrimary);

  return (
    <ThemeProvider theme={props.theme}>
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            WORKOUT APP
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            WORKOUT APP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

            <Link className={classes.test} to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                New Workout
              </Button>
            </Link>
            <Link className={classes.test} to="/all-workouts">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                All Workouts
              </Button>
            </Link>
            <Link className={classes.test} to="/today">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Today
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >

              <Link className={classes.test} to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">NEW WORKOUT</Typography>
                </MenuItem>
              </Link>
              <Link className={classes.test} to="/all-workouts">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">ALL WORKOUTS</Typography>
                </MenuItem>
              </Link>
              <Link className={classes.test} to="/today">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">TODAY</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default NavBarTest;
