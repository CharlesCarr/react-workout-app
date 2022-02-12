import React from "react";
import { Droppable } from 'react-beautiful-dnd';
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  // console.log(todos);

  return (
    <Droppable droppableId="workouts">
    {(provided) => (
    <div className="todo-container" {...provided.droppableProps} ref={provided.innerRef}>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            index={index}
            key={todo.id}
            exercise={todo.exercise}
            setsreps={todo.setsreps}
            weight={todo.weight}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
        {provided.placeholder}
      </ul>
    </div>
    )}
    </Droppable>
  );
};

export default TodoList;
