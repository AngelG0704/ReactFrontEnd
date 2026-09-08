import { useState, useEffect } from "react"
import { Navigate, useNavigate ,useParams } from "react-router"
import Button from "./button"

function TaskDetails() {
    const [loading, setLoading] = useState(true)
    const [Task, setTask] = useState({})
    const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    })

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <h3>{Task.text}</h3>
            <p>{Task.day}</p>
            <Button 
                onClick={() => {
                    navigate(-1)
                }} 
            text='Go Back' 
            />
        </div>
    )
}

export default TaskDetails