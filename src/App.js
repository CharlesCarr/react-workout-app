import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// Importing components
import NewWorkoutPage from "./pages/NewWorkout";
import AllWorkoutsPage from "./pages/AllWorkouts";
import TodayWorkoutPage from "./pages/TodayWorkout";
import NavBarTest from "./components/layout/NavBarTest";

import { createTheme } from '@mui/material/styles';

function App() {
  // state for Todos - going to be an array b/c will have an array of objects in this
  const [todos, setTodos] = useState([]);

  //  state for Workout title
  const [inputTitle, setInputTitle] = useState("");

  //  state for fullWorkouts - going to be an array (will have the todos array inside for each individual workout)
  const [fullWorkouts, setFullWorkouts] = useState([]);

  // function to be able to access the workouts from New Workout - "lifting the state up"
  const getWorkoutData = (data) => {
    const workoutsData = data;
  };

  const colorTheme = createTheme({
    palette: {
      primary: {
        main: '#102027',
      },
      secondary: {
        main: '#37474f',
      },
      error: {
        main: '#eceff1'
      },
    },
  });

  return (
    <div>
      <NavBarTest colorTheme={colorTheme}/>

      <Switch>
        <Route path="/" exact>
          <NewWorkoutPage
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            addWorkoutData={getWorkoutData}
            todos={todos}
            setTodos={setTodos}
            fullWorkouts={fullWorkouts}
            setFullWorkouts={setFullWorkouts}
            colorTheme={colorTheme}
          />
        </Route>
        <Route path="/all-workouts">
          <AllWorkoutsPage todos={todos} fullWorkouts={fullWorkouts}/>
        </Route>
        <Route path="/today">
          <TodayWorkoutPage
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            todos={todos}
            fullWorkouts={fullWorkouts}
            colorTheme={colorTheme}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
