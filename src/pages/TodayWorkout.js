import Today from '../components/today/Today';

function TodayWorkoutPage(props) {
  return (
    <div>
      <header>
        <h1>TODAY'S WORKOUT</h1>
      </header>

      <Today fullWorkouts={props.fullWorkouts}/>
    </div>
  );
}
export default TodayWorkoutPage;
