import React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";

// Simplified way of adding props is using the {} and passing in what you want - instead of 'props.setInputText' to get access
const ExerciseForm = ({ inputExerciseText, setInputExerciseText, theme }) => {
  // Writing JS code / functions

  // when text is input it grabs the input text (value)
  const inputTextExerciseHandler = (e) => {
    // console.log('EXERCISE' + e.target.value);
    setInputExerciseText(e.target.value);
  };

  return (
    <div className="input-form">
      {/* with the onChange, every time the input changes it runs the inputTextHandler function */}
      <ThemeProvider theme={theme}>
      <TextField
        value={inputExerciseText}
        onChange={inputTextExerciseHandler}
        type="text"
        className="todo-input"
        variant="outlined"
        label="Exercise 1"
        color="error"
      />
      </ThemeProvider>
    </div>
  );
};

export default ExerciseForm;
