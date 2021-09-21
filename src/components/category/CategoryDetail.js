import React, { useContext, useEffect } from "react"
import { CategoryContext, } from "./CategoryProvider"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
import { useParams } from "react-router"
import { TaskContext } from "../task/TaskProvider"


export const CategoryDetail = () => {
    const { category, getCategory, setCategory, getCategories} = useContext(CategoryContext)
    // const { tasks, getTasks } = useContext(TaskContext)
    // const history = useHistory()
    
    // useEffect(() => {
    //     getCategories()
    // }, [])
    const {categoryId} = useParams()

    useEffect(
        () => {
            getCategory(categoryId)
        }, []
    )


    return (
    
        <>
        <div className="categories">
            <h2>{category.title}</h2>
            <div>Description: {category.description}</div>
            <div>Tasks</div>
        </div>
      </>
        );
}


