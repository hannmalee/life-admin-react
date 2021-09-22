import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useHistory } from "react-router"

export const NavBar = (props) => {

    const history = useHistory()

    return (
        <>
        <div className="householdName"> Household Name </div>
        <ul className="navbar">
            <button 
            onClick={() => {
            history.push({ pathname: "/" })
            }}
            className="navbar__item">
                Life Admin
            </button>
            <li className="navbar__item">
                Search
            </li>
            {
                (localStorage.getItem("life-admin-token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("life-admin-token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
            </>
    )
}