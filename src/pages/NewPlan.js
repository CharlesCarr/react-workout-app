import React, { useState } from 'react';
import Week from '../components/new_plan/Week';
import Backdrop from '../components/Backdrop';
import NewPlanModal from '../components/new_plan/NewPlanModal';

function NewPlanPage(props) {

    const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);

    console.log(props.fullWorkouts);

    return (
        <div>
            <header>
                <h1>THIS WEEK</h1>
            </header>
            
            <Week workoutModalIsOpen={workoutModalIsOpen} setWorkoutModalIsOpen={setWorkoutModalIsOpen}/>

            {workoutModalIsOpen && <NewPlanModal fullWorkouts={props.fullWorkouts}/>}
            {workoutModalIsOpen && <Backdrop />}
        </div>
    )
}
export default NewPlanPage;