import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// Importing components
import NewWorkoutPage from "./pages/NewWorkout";
import AllWorkoutsPage from "./pages/AllWorkouts";
import TodayWorkoutPage from "./pages/TodayWorkout";
import NavBarTest from "./components/layout/NavBarTest";

import { createTheme } from '@mui/material/styles';
// import { blueGrey } from '@mui/material/colors';

function App() {
  // state for Todos - going to be an array b/c will have an array of objects in this
  const [todos, setTodos] = useState([]);

  //  state for Workout title
  const [inputTitle, setInputTitle] = useState("");
  console.log(inputTitle);

  //  state for fullWorkouts - going to be an array (will have the todos array inside for each individual workout)
  const [fullWorkouts, setFullWorkouts] = useState([]);
  console.log(fullWorkouts);

  // function to be able to access the workouts from New Workout - "lifting the state up"
  const getWorkoutData = (data) => {
    const workoutsData = data;
  };

  const colorTheme = createTheme({
    palette: {
      primary: {
        // light: '#62727b',
        main: '#102027',
        // dark: '#102027',
        // contrastText: '#eceff1',
      },
      secondary: {
        // light: '#c1d5e0',
        main: '#37474f',
        // dark: '#62757f',
        // contrastText: '#000000',
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
