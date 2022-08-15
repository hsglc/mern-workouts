
import { useState, useEffect } from "react"
import { IWorkout } from '../../types'
import WorkoutDetail from "../components/WorkoutDetail"
import WorkoutForm from "../components/WorkoutForm"



const Home = () => {

    const [isDataFetching, setIsDataFetching] = useState<boolean>(true)
    const [data, setData] = useState<IWorkout[]>([])
    const fetchAllWorkouts = async () => {
        const response = await fetch('http://127.0.0.1:3000/api/workouts')
        const data = await response.json()
        setIsDataFetching(false)
        setData(data.workouts)
    }

    useEffect(() => {
        fetchAllWorkouts()
    }, [])
    console.log(data);


    return (
        <div className="home">
            <WorkoutForm />
            {isDataFetching ? <h1>Loading...</h1> : <div className="workouts">{
                data?.map((workout) => <WorkoutDetail workout={workout} key={workout._id} />)
            }</div>}

        </div>
    )
}

export default Home