
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import WorkoutDropDown from './WorkoutDropDown';

function NewPlanModal(props) {

  // const [workoutDropDown, setWorkoutDropDown] = useState("");
  // console.log(workoutDropDown);

  const closeModal = () => {
    props.setWorkoutModalIsOpen(false);
  }

  const selectWorkoutHandler = () => {
    // sets state in new plan as true to show workout then will pass down to WeekDay to test and display
    props.setShowSelectedWorkout(true);

    // close
    props.setWorkoutModalIsOpen(false);

  }

  

  const card = (
    <React.Fragment>
      <CardContent>
        <WorkoutDropDown fullWorkouts={props.fullWorkouts} workoutDropDown={props.workoutDropDown} setWorkoutDropDown={props.setWorkoutDropDown} />
      </CardContent>
      <CardActions className="confirm-btn-container">
        <Button size="small" onClick={selectWorkoutHandler}>Select Workout</Button>
        <Button size="small" onClick={closeModal}>Cancel</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="modal">
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
export default NewPlanModal;
