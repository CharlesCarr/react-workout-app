import React from "react";
import { Draggable } from 'react-beautiful-dnd';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Todo = ({ exercise, setsreps, weight, todo, todos, setTodos, index }) => {
  const deleteHandler = () => {
    // Goes through the todos array and if the id matches then removes it from the array (b/c each element has to 'pass the test' of not being equal to the id)
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
    {(provided) => (
    <TableRow {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell className="table-cell" component="th" scope="row">{exercise}</TableCell>
      <TableCell className="table-cell" align="right">{setsreps}</TableCell>
      <TableCell className="table-cell" align="right"> {weight} </TableCell>
      <TableCell onClick={deleteHandler} className="table-cell" className="trash-btn">
        <i className="fas fa-trash"></i>
      </TableCell>
    </TableRow>
    )}
    </Draggable>
  );
};

export default Todo;
