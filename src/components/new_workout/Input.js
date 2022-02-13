import React from "react";
import ExerciseForm from './ExerciseForm';
import SetsRepsForm from './SetsRepsForm';
import Form from './Form';

import Icon from '@mui/material/Icon';

// Simplified way of adding props is using the {} and passing in what you want - instead of 'props.setInputText' to get access
const Input = ({ inputExerciseText, setInputExerciseText, inputSetsRepsText, setInputSetsRepsText, inputWeightText, setInputWeightText, setTodos, todos }) => {
  // Writing JS code / functions

  const submitTodoHandler = (e) => {
    // preventing the submit / refreshing the page
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random() * 1000, exercise: inputExerciseText, setsreps: inputSetsRepsText, weight: inputWeightText },
    ]);
    // resets state back to empty
    //  for this to reflect on the UI need to pass in the inputText to the input as a value
    setInputExerciseText('');
    setInputSetsRepsText('');
    setInputWeightText('');
  };

  return (
    <form className='input-form'>
      <ExerciseForm inputExerciseText={inputExerciseText} setInputExerciseText={setInputExerciseText}/>
      <SetsRepsForm inputSetsRepsText={inputSetsRepsText} setInputSetsRepsText={setInputSetsRepsText}/>
      <Form inputWeightText={inputWeightText} setInputWeightText={setInputWeightText}/>
      {/* onClick for button calls submitHandler function above */}
      {/* <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button> */}
      <Icon color="primary" onClick={submitTodoHandler} fontSize="large" className="submitExercise" type="submit">add_circle</Icon>
    </form>
  );
};

export default Input;