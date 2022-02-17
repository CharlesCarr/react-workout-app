import Workout from "../components/all_workouts/Workout";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function AllWorkoutsPage(props) {
  const noWorkouts = "(No Saved Workouts to Display)";
  const testTrue = props.fullWorkouts.length === 0;

  // Adding responsive font sizing from material ui
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const header = "ALL WORKOUTS";

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Typography className="pagetitle" variant="h2" gutterBottom>
          {header}
        </Typography>
      </ThemeProvider>

      {testTrue && noWorkouts}

      {props.fullWorkouts.map((test) => {
        return <Workout todos={props.todos} test={test} key={test.id} />;
      })}
    </div>
  );
}
export default AllWorkoutsPage;
