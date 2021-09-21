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
        <article className="categories">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/tasks/new" })
                }}
            >add new task</button>
            {
                categories.map(category => {
                    return <section key={`category--${category.id}`} className="category">
                        <div className="category__title">{category.name}</div>
                        {/* <div className="category__description">{category.description} </div> */}
                    </section>
                })
            }
        </article>
    )
}