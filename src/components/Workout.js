import CompletedWorkout from "../components/CompletedWorkout";
import Heading from "./Heading";

function Workout(props) {
  // console.log(props.fullWorkout);

  // const workoutFull = props.fullWorkout;

  return (
    <div className="todo-container flextest">
      {/* Title of Workout */}
      <h2>{props.test.title}</h2>

      <Heading />

      {props.test.testFullWorkouts.map((individual) => {
        console.log(individual);

        return individual.map((ind) => {
          console.log(ind);
          console.log(ind.id);
          return <CompletedWorkout ind={ind} key={ind.id}/>;
        });
      })}
    </div>
  );
}
export default Workout;
