import React, { useState } from "react"

export const ProfileContext = React.createContext()

export const HouseholdUserProvider = (props) => {
    /*
        Must profile a default value for the `events` property
        so that React doesn't throw an error when you try to
        iterate the events array in the view.
    */
    const [householdUser, setHouseholdUser] = useState()

    const getHouseholdUser = () => {
        return fetch("http://localhost:8000/household_user", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("life_admin_token")}`
            }
        })
            .then(response => response.json())
            .then(setHouseholdUser)
    }

    return (
        <ProfileContext.Provider value={{ householdUser, getHouseholdUser }}>
            {props.children}
        </ProfileContext.Provider>
    )
}