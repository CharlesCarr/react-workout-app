import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TodayDropDown from "./TodayDropDown";
import DisplayTodayWorkout from "./DisplayTodayWorkout";

function Today(props) {
  const [workoutSelected, setWorkoutSelected] = useState(false);

  // console.log(props.workoutDropDown);

  const selectWorkoutHandler = () => {
    console.log(props.fullWorkouts);
    // get the workout that matches the id / title of the workout selected in the drop down
    // change the state so that workout selected is true and then instead display a component for the workout selected
    setWorkoutSelected(true);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Select Your Workout For Today
        </Typography>

        <TodayDropDown
          fullWorkouts={props.fullWorkouts}
          workoutDropDown={props.workoutDropDown}
          setWorkoutDropDown={props.setWorkoutDropDown}
          inputTitle={props.inputTitle} setInputTitle={props.setInputTitle}
        />
      </CardContent>
      <CardActions className="confirm-btn-container">
        <Button size="small" onClick={selectWorkoutHandler}>
          Select Workout
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="today-container">
      <Box sx={{ minWidth: 300, maxWidth: 300 }}>
        {!workoutSelected && <Card variant="outlined">{card}</Card>}
        {workoutSelected && <DisplayTodayWorkout inputTitle={props.inputTitle} setInputTitle={props.setInputTitle} fullWorkouts={props.fullWorkouts} workoutDropDown={props.workoutDropDown} />}
      </Box>
    </div>
  );
}
export default Today;
