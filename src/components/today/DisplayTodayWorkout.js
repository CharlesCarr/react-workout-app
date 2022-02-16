import SelectedWorkout from "./SelectedWorkout";

function DisplayTodayWorkout(props) {
  const findWorkout = () => {
    //   logic here to check the workoutDropDown id to find the appropriate fullWorkout and then display that fullWorkout
    for (let i = 0; i < props.fullWorkouts.length; i++) {
      if (props.fullWorkouts[i].id === props.workoutDropDown) {
        for (
          let j = 0;
          j < props.fullWorkouts[i].testFullWorkouts.length;
          j++
        ) {
          //   this gets the array of objects of the correct workout
          let correctWorkoutArr = props.fullWorkouts[i].testFullWorkouts[j];
          return correctWorkoutArr;
        }
      }
    }
  };

  return findWorkout().map((exercise) => {
    return (
      <SelectedWorkout
        key={exercise.id}
        title={exercise.title}
        exercise={exercise.exercise}
        setsreps={exercise.setsreps}
        weight={exercise.weight}
        inputTitle={props.inputTitle}
        setInputTitle={props.setInputTitle}
      ></SelectedWorkout>
    );
  });
}
export default DisplayTodayWorkout;
