import Workout from "../components/Workout";

function AllWorkoutsPage(props) {
  // const fullWorkout = props.todos;
  //   console.log(fullWorkout);
  // fullWorkout={fullWorkout}

  // <ul className="todo-list"></ul>

  console.log(props.fullWorkouts);

  const noWorkouts = '(No Saved Workouts to Display)';
  const testTrue = props.fullWorkouts.length === 0;
  console.log(testTrue);

  return (
    <div className='all-workouts-container'>
      <header>
        <h1>ALL WORKOUTS</h1>
      </header>

      {testTrue && noWorkouts}

      {props.fullWorkouts.map((test) => {
        return <Workout todos={props.todos} test={test} key={test.id} />;
      })}
    </div>
  );
}
export default AllWorkoutsPage;
