import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
    const [ categories, setCategories ] = useState([])
    const [ category, setCategory ] = useState({})

    const getCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        })
            .then(response => response.json())
            .then(setCategories)
    }

    const getCategory = (categoryId) => {
        return fetch(`http://localhost:8000/categories/${categoryId}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        }).then(res => res.json())
        .then(setCategory)
    }

    const createCategory = (category) => {
        return fetch("http://127.0.0.1:8000/categories", {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem('life-admin-token')}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(getCategories)
    }

    const updateCategory = (category) => {
        return fetch(`http://127.0.0.1:8000/categories/${category.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${localStorage.getItem('life-admin-token')}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then(getCategories)
    }

    const deleteCategory = categoryId => {
        return fetch(`http://localhost:8000/categories/${ categoryId }`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        })
            .then(getCategories)
    }
    
    

    return (
        <CategoryContext.Provider value={{ category, categories, getCategories, createCategory, getCategory, updateCategory, setCategory, deleteCategory }} >
            { props.children }
        </CategoryContext.Provider>
    )
}