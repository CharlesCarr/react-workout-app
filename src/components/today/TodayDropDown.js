import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TodayDropDown(props) {
  const handleChange = (event) => {
    props.setWorkoutDropDown(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Workout Title</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.workoutDropDown}
          label="Workout Title"
          onChange={handleChange}
        >
          {props.fullWorkouts.map((workout) => {
            console.log("Workout ID:" + workout.id);
            return (
              <MenuItem workout={workout} key={workout.id} value={workout.id}>
                {workout.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
export default TodayDropDown;
