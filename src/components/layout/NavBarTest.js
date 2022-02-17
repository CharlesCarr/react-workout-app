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

  return (
    <ThemeProvider theme={props.colorTheme}>
    <AppBar position="static" className={classes.appbar} color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className={classes.navtext}
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            color="error"
          >
            WORKOUT APP
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className={classes.navtext}
          >
            WORKOUT APP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

            <Link className={classes.test} to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                className={classes.navtext}
              >
                New Workout
              </Button>
            </Link>
            <Link className={classes.test} to="/all-workouts">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                className={classes.navtext}
              >
                All Workouts
              </Button>
            </Link>
            <Link className={classes.test} to="/today">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                className={classes.navtext}
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
              className={classes.navtext}
              color="error"
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
              className={classes.hammenu}
            >

              <Link className={classes.test} to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className={classes.navtextham} color="primary">NEW WORKOUT</Typography>
                </MenuItem>
              </Link>
              <Link className={classes.test} to="/all-workouts">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className={classes.navtextham} color="primary">ALL WORKOUTS</Typography>
                </MenuItem>
              </Link>
              <Link className={classes.test} to="/today">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className={classes.navtextham} color="primary">TODAY</Typography>
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
