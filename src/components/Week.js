import Card from '@mui/material/Card';

function Week() {

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className="week-days">
            {weekDays.map((day) => {
                return <Card sx={{ minWidth: 175, maxWidth: 175, minHeight: 175, maxHeight: 175 }} day={day}>{day}</Card>;
            })}
            
        </div>
    )
}
export default Week;