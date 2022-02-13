import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
// import Backdrop from "@mui/material/Backdrop";
// import Typography from "@mui/material/Typography";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

function CustomModal(props) {
  // Material UI below
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

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

  return (
    <div className="modal">
      <p>Enter Name for New Workout</p>
      <input></input>
      <button className="btn" onClick={saveHandler}>
        Save
      </button>
      <button className="btn btn--alt" onClick={props.onClick}>
        Cancel
      </button>
    </div>
  );
}
export default CustomModal;
