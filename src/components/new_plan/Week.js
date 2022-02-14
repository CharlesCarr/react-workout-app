import WeekDay from './WeekDay';

function Week(props) {

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className="week-days">
            {weekDays.map((day) => {
                return <WeekDay day={day} key={day} workoutModalIsOpen={props.workoutModalIsOpen} setWorkoutModalIsOpen={props.setWorkoutModalIsOpen}></WeekDay>;
            })}
            
        </div>
    )
}
export default Week;