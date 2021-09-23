import React, { useContext, useEffect } from "react"
import { CategoryContext, } from "./CategoryProvider"
// import { useHistory } from "react-router-dom/cjs/react-router-dom"
import { useParams } from "react-router"
// import { TaskContext } from "../task/TaskProvider"
import { TaskList } from "../task/TaskList"


export const CategoryDetail = () => {
    const { category, getCategory } = useContext(CategoryContext)
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
            <div>
                <TaskList tasks={category.task_set}/>
            </div>
        </div>
      </>
        );
}


