import Workout from "../components/Workout";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function AllWorkoutsPage(props) {
  console.log(props.fullWorkouts);

  const noWorkouts = "(No Saved Workouts to Display)";
  const testTrue = props.fullWorkouts.length === 0;
  console.log(testTrue);

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
