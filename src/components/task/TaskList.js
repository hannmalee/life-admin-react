import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { useHistory } from "react-router-dom/cjs/react-router-dom"


export const TaskList = (props) => {
    const { tasks, getTasks, deleteTask, updateTask } = useContext(TaskContext)
    const history = useHistory()
    

    return (
        <article className="tasks">
            {
                props.tasks?.map(task => {

                    if (!task.is_completed) {
                    return <>
                    <section key={`task--${task.id}`} className="task">
                        <button className="task__title">{task.title}</button> 
                        <button className="task__delete"
                        onClick={() => {
                            deleteTask(task.id)
                        }}
                        >delete</button> 
                        <button className="task__complete"
                        onClick={() => {
                            task.is_completed = true
                            updateTask(task)
                        }}
                        >task completed</button> 
                        {/* <button className="category__description">{category.description} </div> */}
                    </section>
                    </>
                }})
            }
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/tasks/new" })
                }}
            >add new task</button>


        <h2>Completed Tasks:</h2>
        {
                props.tasks?.map(task => {

                    if (task.is_completed) {
                    return <>
                    <section key={`task--${task.id}`} className="task">
                        <button className="task__title">{task.title}</button> 
                        <button className="task__delete"
                        onClick={() => {
                            deleteTask(task.id)
                        }}
                        >delete</button> 
                        {/* <button className="category__description">{category.description} </div> */}
                    </section>
                    </>
                }})
            }
        </article>
    )
}


