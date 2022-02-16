import CompletedWorkout from "../components/CompletedWorkout";
import Heading from "./Heading";

// Import Material UI Components
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function Workout(props) {
  return (
    <div className="all-workout-container">
      <h2 className="workout-title">{props.test.title}</h2>

      <TableContainer className="workoutTableContainer" component={Paper}>
        <Table className="workoutTable">
          <TableHead>
            <TableRow>
              <TableCell className="table-cell head-cell" align="center">
                EXERCISE
              </TableCell>
              <TableCell className="table-cell head-cell" align="center">
                SETS x REPS
              </TableCell>
              <TableCell className="table-cell head-cell" align="center">
                WEIGHT
              </TableCell>
            </TableRow>
          </TableHead>

          {props.test.testFullWorkouts.map((individual) => {
            console.log(individual);

            return individual.map((ind) => {
              console.log(ind);
              console.log(ind.id);
              return <CompletedWorkout ind={ind} key={ind.id} />;
            });
          })}
        </Table>
      </TableContainer>
    </div>
  );
}
export default Workout;
