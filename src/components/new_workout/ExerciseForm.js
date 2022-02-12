import React from "react";

// Simplified way of adding props is using the {} and passing in what you want - instead of 'props.setInputText' to get access
const ExerciseForm = ({ inputExerciseText, setInputExerciseText }) => {
  // Writing JS code / functions

  // when text is input it grabs the input text (value)
  const inputTextExerciseHandler = (e) => {
    // console.log('EXERCISE' + e.target.value);
    setInputExerciseText(e.target.value);
  };

  return (
    <div className='input-form'>
      {/* with the onChange, every time the input changes it runs the inputTextHandler function */}
      <input value={inputExerciseText} onChange={inputTextExerciseHandler} type="text" className="todo-input" />
      
    </div>
  );
};

export default ExerciseForm;