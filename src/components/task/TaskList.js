import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { useHistory } from "react-router-dom/cjs/react-router-dom"


export const TaskList = (props) => {
    const { tasks, getTasks } = useContext(TaskContext)
    const history = useHistory()
    
    useEffect(() => {
        getTasks()
    }, [])

    return (
        <article className="tasks">
            {
                tasks.map(task => {
                    return <section key={`task--${task.id}`} className="task">
                        <button className="task__title">{task.title}</button>
                        {/* <button className="category__description">{category.description} </div> */}
                    </section>
                })
            }
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/tasks/new" })
                }}
            >add new task</button>
        </article>
    )
}