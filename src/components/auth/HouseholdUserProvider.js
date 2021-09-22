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
                "Authorization": `Token ${localStorage.getItem("life_admin_token")}`
            }
        })
            .then(response => response.json())
            .then(setHouseholdUser)
    }

    const getHouseholdUsers = () => {
        return fetch("http://localhost:8000/household_users", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("life_admin_token")}`
            }
        })
            .then(response => response.json())
            .then(setHouseholdUsers)
    }

    return (
        <HouseholdUserContext.Provider value={{ householdUser, getHouseholdUserProfile, householdUsers, getHouseholdUsers }}>
            {props.children}
        </HouseholdUserContext.Provider>
    )
}