import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';


function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Workout App</div>
            <nav>
                <ul>
                    <li><Link to='/'>New Workout</Link></li>
                    <li><Link to='/all-workouts'>All Workouts</Link></li>
                    <li><Link to='/new-plan'>New Plan</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;