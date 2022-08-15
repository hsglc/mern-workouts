import React, { useState } from 'react'

interface IForm {
    title: string,
    load: number,
    reps: number
}

const WorkoutForm = () => {
    const [workout, setWorkout] = useState<IForm>({
        title: '',
        load: 0,
        reps: 0
    })
    const createWorkoutHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:3000/api/workouts', {
            method: 'POST',
            body: JSON.stringify({
                ...workout
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);
        
    }
    return (
        <form className='create' onSubmit={createWorkoutHandler}>
            <label>
                Excersize Title:
                <input value={
                    workout.title

                }
                    type="text"
                    onChange={e =>
                        setWorkout({
                            ...workout,
                            title: e.target.value
                        })
                    } />
            </label>
            <label>
                Load (in kg):
                <input value={
                    workout.load
                }

                    onChange={e =>
                        setWorkout({
                            ...workout,
                            load: Number(e.target.value)
                        })
                    } />
            </label>
            <label>
                Reps:
                <input value={
                    workout.reps
                }

                    onChange={e =>
                        setWorkout({
                            ...workout,
                            reps: Number(e.target.value)
                        })
                    }
                />
            </label>
            <button type="submit">
                Add Workout
            </button>
        </form>
    )
}

export default WorkoutForm