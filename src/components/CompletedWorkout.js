function CompletedWorkout(props) {
    return (
        <div className="todo-container">
        <ul className="todo-list">
          <div className="todo">
            <li className="todo-item">{props.ind.exercise}</li>
            <li className="todo-item">{props.ind.setsreps}</li>
            <li className="todo-item">{props.ind.weight}</li>
          </div>
        </ul>
      </div>
    )
}
export default CompletedWorkout;