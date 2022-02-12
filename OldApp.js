import React, { useState } from 'react';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';

// Importing components

import Input from './components/new_workout/Input';
import TodoList from './components/TodoList';


function App() {
  // array destructuring for useState [value, function to change that value]
  // first state I want is the text of the 'Exercise Form' - the first input field
  const [inputExerciseText, setInputExerciseText] = useState("");

  // Next want to get the state for the sets and reps form - the second input field
  const [inputSetsRepsText, setInputSetsRepsText] = useState("");
  // Lastly want to get the state for the weight form - the last input field
  const [inputWeightText, setInputWeightText] = useState("");

  // state for Todos - going to be an array b/c will have an array of objects in this
  const [todos, setTodos] = useState([]);

  const handleOnDragEnd = (result) => {
    // console.log(result);
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);

  };



  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <div className="App">
      <header>
        <h1>WORKOUT BUILDER</h1>
      </header>
      {/* Passing in setInputText function to the Form component to the be able to use that function in the Form component */}
      {/* Passing in both todos and setTodos to then be able to add / change to dos */}
      <div className="todo-container">
      <ul className="todo-list">
      <div className="todo">
            <li className="todo-item">Exercise</li>
            <li className="todo-item">SetsxReps</li>
            <li className="todo-item">Weight</li>
        </div>
      </ul>
      </div>
      
      <TodoList setTodos={setTodos} todos={todos} />
      
      <div className="input-container">
      <Input 
        inputExerciseText={inputExerciseText} setInputExerciseText={setInputExerciseText}
        inputSetsRepsText={inputSetsRepsText} setInputSetsRepsText={setInputSetsRepsText}
        inputWeightText={inputWeightText} setInputWeightText={setInputWeightText}
        todos={todos} setTodos={setTodos}
      />
      </div>
      
      
    </div>
    </DragDropContext>
  );
}

export default App;
