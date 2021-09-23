import React, { useState } from "react"

export const HouseholdUserContext = React.createContext()

export const HouseholdUserProvider = (props) => {
    /*
        Must profile a default value for the `events` property
        so that React doesn't throw an error when you try to
        iterate the events array in the view.
    */
    const [householdUser, setHouseholdUser] = useState({})
    const [householdUsers, setHouseholdUsers] = useState([])

    const getHouseholdUserProfile = () => {
        return fetch("http://localhost:8000/household_users", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        })
            .then(response => response.json())
            .then(setHouseholdUser)
    }

    const getHouseholdUsers = () => {
        return fetch("http://localhost:8000/household_users", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        })
            .then(response => response.json())
            .then(setHouseholdUsers)
    }

    const updateHouseholdUser = (householdUser) => {
        return fetch(`http://127.0.0.1:8000/household_users/${householdUser.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${localStorage.getItem('life-admin-token')}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(householdUser)
        })
            .then(getHouseholdUsers)
    }

    const createHouseholdUser = (householdUser) => {
        return fetch("http://127.0.0.1:8000/household_users", {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem('life-admin-token')}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(householdUser)
        })
            .then(getHouseholdUsers)
    }

    const getCurrentHouseholdUser = () => {
        return fetch("http://localhost:8000/household_users", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("life-admin-token")}`
            }
        })
            .then(response => response.json())
            .then(setHouseholdUser)
    }

    return (
        <HouseholdUserContext.Provider value={{ householdUser, getHouseholdUserProfile, householdUsers, getHouseholdUsers, updateHouseholdUser, createHouseholdUser }}>
            {props.children}
        </HouseholdUserContext.Provider>
    )
}