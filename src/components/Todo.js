import React from "react";
import { Draggable } from 'react-beautiful-dnd';

const Todo = ({ exercise, setsreps, weight, todo, todos, setTodos, index }) => {
  const deleteHandler = () => {
    // Goes through the todos array and if the id matches then removes it from the array (b/c each element has to 'pass the test' of not being equal to the id)
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
    {(provided) => (
    <div className="todo" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
      <li className="todo-item">{exercise}</li>
      <li className="todo-item">{setsreps}</li>
      <li className="todo-item"> {weight} </li>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
    )}
    </Draggable>
  );
};

export default Todo;
