import React, { useState } from 'react';
import Week from '../components/new_plan/Week';
import Backdrop from '../components/Backdrop';
import NewPlanModal from '../components/new_plan/NewPlanModal';

function NewPlanPage(props) {

    const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);

    console.log(props.fullWorkouts);

    const passSelectData = () => {
        
    }

    return (
        <div>
            <header>
                <h1>THIS WEEK</h1>
            </header>
            
            <Week workoutModalIsOpen={workoutModalIsOpen} setWorkoutModalIsOpen={setWorkoutModalIsOpen} passSelectData={passSelectData}/>

            {workoutModalIsOpen && <NewPlanModal fullWorkouts={props.fullWorkouts} workoutModalIsOpen={workoutModalIsOpen} setWorkoutModalIsOpen={setWorkoutModalIsOpen}/>}
            {workoutModalIsOpen && <Backdrop workoutModalIsOpen={workoutModalIsOpen} setWorkoutModalIsOpen={setWorkoutModalIsOpen}/>}
        </div>
    )
}
export default NewPlanPage;