import React, { useState } from "react"

export const TaskContext = React.createContext()

export const TaskProvider = (props) => {
    const [ tasks, setTasks ] = useState([])
    const [ , setTask ] = useState({})

    const getTasks = () => {
        return fetch("http://localhost:8000/tasks", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        })
            .then(response => response.json())
            .then(setTasks)
    }

    const getTask = (taskId) => {
        return fetch(`http://localhost:8000/tasks/${taskId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        }).then(res => res.json())
        .then(setTask)
    }

    const createTask = (task) => {
        return fetch("http://127.0.0.1:8000/tasks", {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem('life-admin-token')}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(getTasks)
    }

    const updateTask = (task) => {
        return fetch(`http://127.0.0.1:8000/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${localStorage.getItem('life-admin-token')}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(getTasks)
    }

    const deleteTask = taskId => {
        return fetch(`http://localhost:8000/tasks/${ taskId }`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        })
            .then(getTasks)
    }
    
    return (
        <TaskContext.Provider value={{ tasks, getTasks, createTask, getTask, updateTask, deleteTask }} >
            { props.children }
        </TaskContext.Provider>
    )
}