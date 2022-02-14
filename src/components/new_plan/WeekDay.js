import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WeekDay(props) {

  const selectWorkoutHandler = () => {
    props.setWorkoutModalIsOpen(true);
  }

  return (
    <Card
      sx={{ minWidth: 175, maxWidth: 175, minHeight: 175, maxHeight: 175 }}
      day={props.day}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {props.day}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained" onClick={selectWorkoutHandler}>Add Workout</Button>
      </CardActions>
    </Card>
  );
}
export default WeekDay;
