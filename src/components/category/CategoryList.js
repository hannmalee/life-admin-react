import React, { useContext, useEffect } from "react"
import { CategoryContext, } from "./CategoryProvider"
import { useHistory } from "react-router-dom/cjs/react-router-dom"


export const CategoryList = (props) => {
    const { categories, getCategories } = useContext(CategoryContext)
    const history = useHistory()
    
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <article className="categories">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/categories/new" })
                }}
            >add new category</button>
            {
                categories.map(category => {
                    return <section key={`category--${category.id}`} className="category">
                        <div className="category__title">{category.title}</div>
                        {/* <div className="category__description">{category.description} </div> */}
                    </section>
                })
            }
        </article>
    )
}