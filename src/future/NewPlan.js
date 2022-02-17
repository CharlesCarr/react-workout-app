import React, { useState } from 'react';
import Week from '../components/new_plan/Week';
import Backdrop from '../components/Backdrop';
import NewPlanModal from '../components/new_plan/NewPlanModal';

function NewPlanPage(props) {

    const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);

    const [workoutDropDown, setWorkoutDropDown] = useState("");
    console.log(workoutDropDown);


    const [showSelectedWorkout, setShowSelectedWorkout] = useState(false);

    console.log(props.fullWorkouts);

    const passSelectData = () => {
        
    }

    return (
        <div>
            <header>
                <h1>THIS WEEK</h1>
            </header>
            
            <Week showSelectedWorkout={showSelectedWorkout} setShowSelectedWorkout={setShowSelectedWorkout} workoutModalIsOpen={workoutModalIsOpen} setWorkoutModalIsOpen={setWorkoutModalIsOpen} passSelectData={passSelectData} workoutDropDown={workoutDropDown} setWorkoutDropDown={setWorkoutDropDown}/>

            {workoutModalIsOpen && <NewPlanModal showSelectedWorkout={showSelectedWorkout} setShowSelectedWorkout={setShowSelectedWorkout} workoutDropDown={workoutDropDown} setWorkoutDropDown={setWorkoutDropDown} fullWorkouts={props.fullWorkouts} workoutModalIsOpen={workoutModalIsOpen} setWorkoutModalIsOpen={setWorkoutModalIsOpen}/>}
            {workoutModalIsOpen && <Backdrop workoutModalIsOpen={workoutModalIsOpen} setWorkoutModalIsOpen={setWorkoutModalIsOpen}/>}
        </div>
    )
}
export default NewPlanPage;