import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import TodayDropDown from './TodayDropDown';

function Today(props) {
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
        />

      </CardContent>
      <CardActions className="confirm-btn-container">
        <Button size="small">
          Select Workout
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="today-container">
      <Box sx={{ minWidth: 300, maxWidth: 300}}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
export default Today;
