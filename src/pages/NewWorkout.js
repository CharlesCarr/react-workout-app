import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

// Importing components
import Input from "../components/new_workout/Input";
import TodoList from "../components/TodoList";
import CustomModal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import Heading from "../components/Heading";

// Import Material UI Components
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function NewWorkoutPage(props) {
  // array destructuring for useState [value, function to change that value]
  // first state I want is the text of the 'Exercise Form' - the first input field
  const [inputExerciseText, setInputExerciseText] = useState("");
  // Next want to get the state for the sets and reps form - the second input field
  const [inputSetsRepsText, setInputSetsRepsText] = useState("");
  // Lastly want to get the state for the weight form - the last input field
  const [inputWeightText, setInputWeightText] = useState("");

  // state for Todos - going to be an array b/c will have an array of objects in this
  // const [todos, setTodos] = useState([]);
  //   console.log(todos);

  //   state for Modal - opening and closing, set to closed at first
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOnDragEnd = (result) => {
    // console.log(result);
    if (!result.destination) return;

    // testing by adding props after moving state to App
    const items = Array.from(props.todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // testing by adding props after moving state to App
    props.setTodos(items);
  };

  const saveWorkoutHandler = () => {
    // modal/overlay to appear to confirm saving and be able to name the saved workout (can look back at course to do this easily)
    setModalIsOpen(true);
    // think below will be a separate function
    // get all the different exercises into one object
    // then display this object as a workout in 'All Workouts'
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  // // testing by adding props after moving state to App
  const passWorkoutData = (todos) => {
    const workoutData = {
      ...todos,
      // test: 'test'
    };
    props.addWorkoutData(workoutData);
  };

  // Adding responsive font sizing from material ui
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const header = "WORKOUT BUILDER";

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="app">
        <ThemeProvider theme={theme}>
          <Typography className="pagetitle" variant="h2" gutterBottom>
            {header}
          </Typography>
        </ThemeProvider>

      <ThemeProvider theme={props.colorTheme}>
        <TableContainer
          className="workoutTableContainer"
          component={Paper}
          sx={{ maxWidth: 750 }}
        >
          <Table
            className="workoutTable"
            // color="secondary"
            // sx={{ maxWidth: 750 }}
            // aria-label="simple table"
          >
            <TableHead className="new-wkt-header">
              <TableRow>
                <TableCell className="table-cell" align="center">
                  EXERCISE
                </TableCell>
                <TableCell className="table-cell" align="center">
                  SETS x REPS
                </TableCell>
                <TableCell className="table-cell" align="center">
                  WEIGHT
                </TableCell>
                <TableCell className="table-cell" align="center">
                  <i className="fas fa-trash"></i>
                </TableCell>
              </TableRow>
            </TableHead>

            <TodoList setTodos={props.setTodos} todos={props.todos} />
          </Table>
        </TableContainer>
        </ThemeProvider>

        {/* // testing by adding props after moving state to App */}

        <div className="input-container">
          <Input
            inputExerciseText={inputExerciseText}
            setInputExerciseText={setInputExerciseText}
            inputSetsRepsText={inputSetsRepsText}
            setInputSetsRepsText={setInputSetsRepsText}
            inputWeightText={inputWeightText}
            setInputWeightText={setInputWeightText}
            // // testing by adding props after moving state to App
            todos={props.todos}
            setTodos={props.setTodos}
            theme={props.colorTheme}
          />
          <ThemeProvider theme={props.colorTheme}>
          <Button
            onClick={saveWorkoutHandler}
            className="save-wkt-btn"
            variant="contained"
            size="small"
            style={{
              maxWidth: "100px",
              maxHeight: "75px",
              minWidth: "100px",
              minHeight: "75px",
            }}
          >
            Save Workout
          </Button>
          </ThemeProvider>
        </div>

        {/* // testing by adding props after moving state to App */}
        {modalIsOpen && (
          <CustomModal
            inputTitle={props.inputTitle}
            setInputTitle={props.setInputTitle}
            onClick={closeModalHandler}
            todos={props.todos}
            setTodos={props.setTodos}
            passWorkoutData={passWorkoutData}
            fullWorkouts={props.fullWorkouts}
            setFullWorkouts={props.setFullWorkouts}
            theme={props.colorTheme}
          />
        )}
        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      </div>
    </DragDropContext>
  );
}
export default NewWorkoutPage;
