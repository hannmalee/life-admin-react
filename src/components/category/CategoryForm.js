import React, { useContext, useState, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"
import { useHistory } from 'react-router-dom'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"


export const CategoryForm = () => {
    const history = useHistory()
    const { createCategory, getCategory, updateCategory, getCategories } = useContext(CategoryContext)
    const { categoryId } = useParams()
    const [isEdit, setIsEdit] = useState(false)
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentCategory, setCurrentCategory] = useState({
        title: "",
        description: "",
        creator: parseInt(localStorage.getItem("life-admin-token"))
    })

    /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    */
    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        console.log('categoryId', typeof categoryId)
        if (categoryId) {
            setIsEdit(true)
            getCategory(categoryId).then((data) => {
                console.log(data)
                setCurrentCategory({
                    title: data.title,
                    description: data.description,
                    creator: data.creator,
                })
            })
        }
    }, [categoryId])

    /*
        REFACTOR CHALLENGE START
        Can you refactor this code so that all property
        state changes can be handled with a single function
        instead of five functions that all, largely, do
        the same thing?
        One hint: [event.target.name]
    */
    const changeCategoryTitleState = (event) => {
        const newCategoryState = { ...currentCategory }
        newCategoryState.title = event.target.value
        setCurrentCategory(newCategoryState)
    }

    const changeCategoryDescriptionState = (event) => {
        const newCategoryState = { ...currentCategory }
        newCategoryState.description = event.target.value
        setCurrentCategory(newCategoryState)
    }

    /* REFACTOR CHALLENGE END */

    return (
        <form className="categoryForm">
            <h2 className="categoryForm__title">add new category</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentCategory.title}
                        onChange={changeCategoryTitleState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentCategory.description}
                        onChange={changeCategoryDescriptionState}
                    />
                </div>
            </fieldset>

            {/* You create the rest of the input fields for each game property */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const category = {
                        title: currentCategory.title,
                        description: currentCategory.description,
                        // creator: parseInt(localStorage.getItem("life-admin-token")),
                    }

                    // Send POST request to your API
                    if (isEdit) {
                        category.id = categoryId
                        updateCategory(category).then(() => history.push("/"))
                    } else {
                        createCategory(category)
                            .then(() => history.push("/"))
                    }
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}