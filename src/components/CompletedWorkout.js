import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function CompletedWorkout(props) {
  return (
    <TableBody>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell className="table-cell" component="th" scope="row">
          {props.ind.exercise}
        </TableCell>
        <TableCell className="table-cell" component="th" scope="row">
          {props.ind.setsreps}
        </TableCell>
        <TableCell className="table-cell" component="th" scope="row">
          {props.ind.weight}
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
export default CompletedWorkout;
