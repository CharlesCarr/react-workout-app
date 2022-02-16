import DisplayTodayWorkout from "./DisplayTodayWorkout";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

function FullTodayWorkout(props) {
  return (
    <div className="all-workout-container">
      <h2 className="workout-title">{props.inputTitle}</h2>

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

          <DisplayTodayWorkout
            inputTitle={props.inputTitle}
            setInputTitle={props.setInputTitle}
            fullWorkouts={props.fullWorkouts}
            workoutDropDown={props.workoutDropDown}
          />
        </Table>
      </TableContainer>
    </div>
  );
}
export default FullTodayWorkout;
