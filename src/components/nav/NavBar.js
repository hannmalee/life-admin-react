import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useHistory } from "react-router"

export const NavBar = (props) => {

    const history = useHistory()

    return (
        <>
        <h1 className="householdName"> LIFE ADMIN</h1>
        <ul className="navbar">
            <button 
            onClick={() => {
            history.push({ pathname: "/" })
            }}
            className="navbar__item">
                home
            </button>
            {
                (localStorage.getItem("life-admin-token") !== null) ?
                    <li className="nav-item">
                        <button class="button" className="nav-link fakeLink"
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