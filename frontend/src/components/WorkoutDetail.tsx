import { IWorkout } from '../../types'

interface IProps {
    key: string,
    workout: IWorkout
}


const WorkoutDetail = ({ workout }: IProps) => {

    return (
        <div className='workout-details'>
            <h4>{workout.title}</h4>
            <p>Load (Kg) : {workout.load}</p>
            <p>Reps : {workout.reps}</p>
            <p>{workout.createdAt.toLocaleString()}</p>
        </div>
    )
}

export default WorkoutDetail