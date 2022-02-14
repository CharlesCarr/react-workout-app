import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';

function CustomModal(props) {

  const saveHandler = () => {
    // call a function in here that calls a function in NewWorkout
    props.passWorkoutData(props.todos);

    // then will close the modal
    props.onClick();

    // also want to clear out the workout builder
    // think will also need to have an array of all the workouts somewhere
    props.setFullWorkouts([
      ...props.fullWorkouts,
      // { id: Math.random() * 1000, exercise: inputExerciseText, setsreps: inputSetsRepsText, weight: inputWeightText },
      {
        id: Math.random(),
        title: "Workout Title",
        testFullWorkouts: [props.todos],
      },
    ]);
    // resets state back to empty
    //  for this to reflect on the UI need to pass in the inputText to the input as a value
    props.setTodos([]);
    //   setInputSetsRepsText('');
    //   setInputWeightText('');
    // console.log(props.fullWorkouts);
    console.log(props.todos);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
        Enter Name for New Workout
        </Typography>

        <TextField id="filled-basic" label="Workout Name" variant="standard" />
    
      </CardContent>
      <CardActions className="confirm-btn-container">
        <Button size="small" onClick={saveHandler}>Save Workout</Button>
        <Button size="small" onClick={props.onClick}>Cancel</Button>
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
export default CustomModal;
