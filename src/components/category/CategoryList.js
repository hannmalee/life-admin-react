import React, { useContext, useEffect } from "react"
import { CategoryContext, } from "./CategoryProvider"
import { useHistory } from "react-router-dom/cjs/react-router-dom"

export const CategoryList = (props) => {
    const { categories, getCategories, deleteCategory } = useContext(CategoryContext)
    const history = useHistory()
    
    useEffect(() => {
        getCategories()
    }, [])

    return (
        
        <article className="categories">
            {
                categories?.map(category => {
                    return <>
                    <button key={`category--${category.id}`} className="category"
                    onClick={() => {
                        history.push({ pathname: `/categories/${category.id}`})
                    }}>
                        <div className="category__title">{category.title}</div>
                        {/* <div className="category__description">{category.description} </div> */}
                    </button>
                    <button class="button" className="category__delete"
                        onClick={() => {
                            deleteCategory(category.id)
                        }}
                        >delete</button> 
                    </>
                })
            }
        <button class="button" className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/categories/new" })
                }}
            >add new category</button>
        <button class="button" className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/search" })
                }}
            >add someone to household</button>

            {/* <div>
                <h2>Current Household Members:</h2>
            </div> */}
        </article>
    )
}