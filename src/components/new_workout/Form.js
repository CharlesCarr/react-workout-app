import React from "react";
import TextField from '@mui/material/TextField';

// Simplified way of adding props is using the {} and passing in what you want - instead of 'props.setInputText' to get access
const Form = ({ inputWeightText, setInputWeightText }) => {
  // Writing JS code / functions

  // when text is input it grabs the input text (value)
  const inputWeightTextHandler = (e) => {
    // console.log('WEIGHTS' + e.target.value);
    setInputWeightText(e.target.value);
  };

  return (
    <div className='input-form'>
      {/* with the onChange, every time the input changes it runs the inputTextHandler function */}
      <TextField value={inputWeightText} onChange={inputWeightTextHandler} type="text" className="todo-input" variant="outlined" label="25 (lb)" />
      {/* onClick for button calls submitHandler function above */}
    </div>
  );
};

export default Form;
