import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

// Importing components

import Input from '../components/new_workout/Input';
import TodoList from '../components/TodoList';
import Modal from '../components/Modal';
import Backdrop from '../components/Backdrop';
import Heading from "../components/Heading";


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
  }

  const closeModalHandler = () => {
      setModalIsOpen(false);
  }

  // // testing by adding props after moving state to App
  const passWorkoutData = (todos) => {
    const workoutData = {
      ...todos,
      // test: 'test'
    };
    props.addWorkoutData(workoutData);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <div className="App">
      <header>
        <h1>WORKOUT BUILDER</h1>
      </header>
     
      <Heading />
      
      {/* // testing by adding props after moving state to App */}
      <TodoList setTodos={props.setTodos} todos={props.todos} />
      
      <div className="input-container">
      <Input 
        inputExerciseText={inputExerciseText} setInputExerciseText={setInputExerciseText}
        inputSetsRepsText={inputSetsRepsText} setInputSetsRepsText={setInputSetsRepsText}
        inputWeightText={inputWeightText} setInputWeightText={setInputWeightText}
        // // testing by adding props after moving state to App
        todos={props.todos} setTodos={props.setTodos}
      />
      <button onClick={saveWorkoutHandler}>Save Workout</button>
      </div>

      {/* // testing by adding props after moving state to App */}
      {modalIsOpen && <Modal onClick={closeModalHandler} todos={props.todos} setTodos={props.setTodos} passWorkoutData={passWorkoutData} fullWorkouts={props.fullWorkouts} setFullWorkouts={props.setFullWorkouts}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
      
      
    </div>
    </DragDropContext>
  );
}
export default NewWorkoutPage;