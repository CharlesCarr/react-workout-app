function Modal(props) {

    const saveHandler = () => {
        // call a function in here that calls a function in NewWorkout
        props.passWorkoutData(props.todos);

        // then will close the modal
        props.onClick();

        // also want to clear out the workout builder
        // think will also need to have an array of all the workouts somewhere
        props.setFullWorkouts([
            ...props.fullWorkouts,
            // { id: Math.random() * 1000, exercise: inputExerciseText, setsreps: inputSetsRepsText, weight: inputWeightText },
            {id: Math.random(), title: 'Workout Title', testFullWorkouts: [props.todos]},
          ]);
          // resets state back to empty
          //  for this to reflect on the UI need to pass in the inputText to the input as a value
          props.setTodos([]);
        //   setInputSetsRepsText('');
        //   setInputWeightText('');
        // console.log(props.fullWorkouts);
        console.log(props.todos);
    }
    
    return (
        <div className="modal">
            <p>Enter Name for New Workout</p>
            <input></input>
            <button className="btn" onClick={saveHandler}>Save</button>
            <button className="btn btn--alt" onClick={props.onClick}>Cancel</button>
        </div>
    )
}
export default Modal;