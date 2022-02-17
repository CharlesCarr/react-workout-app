import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DisplayWorkout from './DisplayWorkout';

function WeekDay(props) {

  const [daySelected, setDaySelected] = useState(false);

  const selectWorkoutHandler = () => {
    props.setWorkoutModalIsOpen(true);

    // here will also need to save something to signal that a specific day has been selected and save that (useState?)
    setDaySelected(true);
  }

  console.log(props.showSelectedWorkout);

  const test = props.showSelectedWorkout;

  return (
    <Card
      sx={{ minWidth: 175, maxWidth: 175, minHeight: 175, maxHeight: 175 }}
      day={props.day}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {props.day}
        </Typography>

        {test && <DisplayWorkout showSelectedWorkout={props.showSelectedWorkout} setShowSelectedWorkout={props.setShowSelectedWorkout}/>}
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" onClick={selectWorkoutHandler}>Add Workout</Button>
      </CardActions>
    </Card>
  );
}
export default WeekDay;
