import Workout from "../components/Workout";

function AllWorkoutsPage(props) {
  // const fullWorkout = props.todos;
  //   console.log(fullWorkout);
  // fullWorkout={fullWorkout}

  // <ul className="todo-list"></ul>

  return (
    <div>
      <header>
        <h1>ALL WORKOUTS</h1>
      </header>

      {props.fullWorkouts.map((test) => {
        return <Workout todos={props.todos} test={test} key={test.id} />;
      })}
    </div>
  );
}
export default AllWorkoutsPage;
