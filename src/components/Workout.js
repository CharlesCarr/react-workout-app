import CompletedWorkout from "../components/CompletedWorkout";
import Heading from "./Heading";

// Import Material UI Components
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Workout(props) {

  // className="todo-container flextest"

  return (
    <div className="ind-workout-container" >
      {/* Title of Workout */}
      <h2>{props.test.title}</h2>

      {/* <Heading /> */}
      <TableContainer className="workoutTableContainer" component={Paper}  sx={{ maxWidth: 750 }}>
      <Table className="workoutTable" sx={{ maxWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">EXERCISE</TableCell>
            <TableCell className="table-cell" align="right">SETS x REPS</TableCell>
            <TableCell className="table-cell" align="right">WEIGHT</TableCell>
          </TableRow>
        </TableHead>

      
      {props.test.testFullWorkouts.map((individual) => {
        console.log(individual);

        
        return individual.map((ind) => {
          console.log(ind);
          console.log(ind.id);
          return <CompletedWorkout ind={ind} key={ind.id}/>;
        });
      })}
      </Table>
      </TableContainer>
      
    </div>
  );
}
export default Workout;
