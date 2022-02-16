import React from "react";
import TextField from '@mui/material/TextField';
import { ThemeProvider } from "@mui/material/styles";

// Simplified way of adding props is using the {} and passing in what you want - instead of 'props.setInputText' to get access
const SetsRepsForm = ({ inputSetsRepsText, setInputSetsRepsText, theme }) => {
  // Writing JS code / functions

  // when text is input it grabs the input text (value)
  const inputSetsRepsTextHandler = (e) => {
    // console.log('SETSREPS' + e.target.value);
    setInputSetsRepsText(e.target.value);
  };

  return (
    <div className='input-form'>
      {/* with the onChange, every time the input changes it runs the inputTextHandler function */}
      <ThemeProvider theme={theme}>
      <TextField value={inputSetsRepsText} onChange={inputSetsRepsTextHandler} type="text" className="todo-input" variant="outlined" label="3x5" color="error"/>
      </ThemeProvider>
      {/* onClick for button calls submitHandler function above */}
    </div>
  );
};

export default SetsRepsForm;