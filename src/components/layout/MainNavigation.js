// import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <AppBar>
      <Toolbar>
        <div>Workout App</div>

        <nav>
          <ul>
            <li>
              <Link to="/">New Workout</Link>
            </li>
            <li>
              <Link to="/all-workouts">All Workouts</Link>
            </li>
            <li>
              <Link to="/new-plan">New Plan</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>

    // Keeping this commented as reference - will use Material UI components instead
    // <header className={classes.header}>
    //     <div className={classes.logo}>Workout App</div>
    //     <nav>
    //         <ul>
    //             <li><Link to='/'>New Workout</Link></li>
    //             <li><Link to='/all-workouts'>All Workouts</Link></li>
    //             <li><Link to='/new-plan'>New Plan</Link></li>
    //         </ul>
    //     </nav>
    // </header>
  );
}
export default MainNavigation;
