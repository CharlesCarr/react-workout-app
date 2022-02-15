import SelectedWorkout from "./SelectedWorkout";

function DisplayTodayWorkout(props) {
  console.log(props.fullWorkouts);
  console.log(props.workoutDropDown);

  const findWorkout = () => {
    //   logic here to check the workoutDropDown id to find the appropriate fullWorkout and then display that fullWorkout
    for (let i = 0; i < props.fullWorkouts.length; i++) {
      console.log(props.fullWorkouts[i]);
      console.log(props.fullWorkouts[i].id);
      console.log(props.fullWorkouts[i].title);

      if (props.fullWorkouts[i].id === props.workoutDropDown) {
        for (
          let j = 0;
          j < props.fullWorkouts[i].testFullWorkouts.length;
          j++
        ) {
          //   this gets the array of objects of the correct workout
          //   console.log(props.fullWorkouts[i].testFullWorkouts[j]);
          let correctWorkoutArr = props.fullWorkouts[i].testFullWorkouts[j];
          console.log(correctWorkoutArr);
          return correctWorkoutArr;
        }
      }
    }
  };

  //   findWorkout();

  return (
    // <div>
      findWorkout().map((exercise) => {
        return (
          <SelectedWorkout
            key={exercise.id}
            exercise={exercise.exercise}
            setsreps={exercise.setsreps}
            weight={exercise.weight}
          ></SelectedWorkout>
        );
      })
    // </div>
  );
}
export default DisplayTodayWorkout;
