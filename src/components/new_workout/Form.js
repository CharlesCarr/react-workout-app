import React from "react";

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
      <input value={inputWeightText} onChange={inputWeightTextHandler} type="text" className="todo-input" />
      {/* onClick for button calls submitHandler function above */}
    </div>
  );
};

export default Form;
