import React, { useState } from "react";
import Today from "../components/today/Today";

function TodayWorkoutPage(props) {
  const [workoutDropDown, setWorkoutDropDown] = useState("");
//   console.log(workoutDropDown);

  return (
    <div>
      <header>
        <h1>TODAY'S WORKOUT</h1>
      </header>

      <Today
        fullWorkouts={props.fullWorkouts}
        workoutDropDown={workoutDropDown}
        setWorkoutDropDown={setWorkoutDropDown}
      />
    </div>
  );
}
export default TodayWorkoutPage;
