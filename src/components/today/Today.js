import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

import TodayDropDown from "./TodayDropDown";
import DisplayTodayWorkout from "./DisplayTodayWorkout";
import FullTodayWorkout from "./FullTodayWorkout";

function Today(props) {
  const [workoutSelected, setWorkoutSelected] = useState(false);

  const selectWorkoutHandler = () => {
    // get the workout that matches the id / title of the workout selected in the drop down
    // change the state so that workout selected is true and then instead display a component for the workout selected
    setWorkoutSelected(true);
  };

  const card = (
    <React.Fragment>
      <ThemeProvider theme={props.colorTheme}>
        <CardContent className="selectday">
          <Typography className="selecttext" sx={{ fontSize: 14 }}>
            Select Your Workout For Today
          </Typography>

          <TodayDropDown
            fullWorkouts={props.fullWorkouts}
            workoutDropDown={props.workoutDropDown}
            setWorkoutDropDown={props.setWorkoutDropDown}
            inputTitle={props.inputTitle}
            setInputTitle={props.setInputTitle}
          />
        </CardContent>
        <CardActions className="confirm-btn-container">
          <Button
            size="small"
            onClick={selectWorkoutHandler}
            variant="contained"
          >
            Select Workout
          </Button>
        </CardActions>
      </ThemeProvider>
    </React.Fragment>
  );

  return (
    <div className="today-container">
      <Box className="box">
        {!workoutSelected && <Card variant="outlined">{card}</Card>}
        {workoutSelected && (
          <FullTodayWorkout
            inputTitle={props.inputTitle}
            setInputTitle={props.setInputTitle}
            fullWorkouts={props.fullWorkouts}
            workoutDropDown={props.workoutDropDown}
          />
        )}
      </Box>
    </div>
  );
}
export default Today;
