import React, { useEffect, useContext } from "react"
import { HouseholdUserContext } from "./HouseholdUserProvider"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
// import "./Profile.css"


export const HouseholdUserProfile = () => {
    const { householdUser, getHouseholdUserProfile } = useContext(HouseholdUserContext)

    const history = useHistory()

    useEffect(() => {
        getHouseholdUserProfile()
    }, [])

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: 
                    {/* {householdUser.user.first_name}  */}
                </div>
                <div className="profile__username">Username:
                 {/* {householdUser.user.username} */}
                </div>
                <div className="profile__bio">About you:
                 {/* {householdUser.user.description} */}
                 </div>
                 <div className="profile__title">
                   <h2> Household name: </h2>
                    {/* {householdUser.user.first_name}  */}
                </div>
                 <div className="profile__title">
                    People in your household:
                    {/* {householdUser.user.first_name}  */}
                </div>
                <button class="button" className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/search" })
                }}
            >search for users</button>
            </section>
            {/* <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Your Events</h3>
                </header>
                <div className="registrations">
                    {
                        householdUsers.events.map(event => {
                            return <div key={event.id} className="registration">
                                <div className="registration__game">{event.game.title}</div>
                                <div>{event.description}</div>
                                <div>
                                    {event.date} @ {event.time}
                                </div>
                            </div>
                        })
                    }
                </div>
            </section> */}
        </article>
    )
}