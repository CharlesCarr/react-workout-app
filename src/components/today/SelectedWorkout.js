import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

function SelectedWorkout(props) {
  return (
    <TableContainer
      className="workoutTableContainer"
      component={Paper}
      sx={{ maxWidth: 800 }}
    >
      <Table
        className="workoutTable"
        sx={{ maxWidth: 800 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">EXERCISE</TableCell>
            <TableCell className="table-cell" align="right">
              SETS x REPS
            </TableCell>
            <TableCell className="table-cell" align="right">
              WEIGHT
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell className="table-cell" component="th" scope="row">
              {props.exercise}
            </TableCell>
            <TableCell className="table-cell" component="th" scope="row">
              {props.setsreps}
            </TableCell>
            <TableCell className="table-cell" component="th" scope="row">
              {props.weight}
            </TableCell>
            {/* <li className="todo-item">{props.ind.exercise}</li>
        <li className="todo-item">{props.ind.setsreps}</li>
        <li className="todo-item">{props.ind.weight}</li> */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SelectedWorkout;
