import React, { useEffect, useContext, useState } from "react";
import { HouseholdUserContext } from "./HouseholdUserProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useRef } from "react";
// import "./Profile.css"

export const UserSearch = () => {
  const {
    householdUser,
    getHouseholdUsers,
    householdUsers,
    updateHouseholdUser
  } = useContext(HouseholdUserContext);

  const [foundUserObj, setFoundUserObj] = useState()


  useEffect(() => {
    getHouseholdUsers()
  }, []);


const [currentUserSearch, setCurrentUserSearch] = useState("")


  const changeUserSearchState = (event) => {
    setCurrentUserSearch(event.target.value)
}

  return (
    <article className="profile">
      <header>
        <h1>Search by email:</h1>
      </header>
      <section className="profile__info">
        <header className="profile__header">
          <fieldset>
            <input type="text" name="userSearch" required autoFocus className="form-control"
                        value={currentUserSearch}
                        onChange={changeUserSearchState}
                    />
          </fieldset>
          <button
            onClick={evt => {
                evt.preventDefault()
                

            const foundUser = householdUsers.find(user => user.user.email.includes(currentUserSearch))

            console.log(foundUser)
                if (foundUser) {
                    setFoundUserObj(foundUser)
                } 
                
            }}
            className="btn btn-primary"
          >
            search
          </button>
        </header>

        <div className="profile__title">
          <h2> Search Results: </h2>
    
          <div>{foundUserObj?.user?.first_name} {foundUserObj?.user?.last_name} <button className="user__add"
                        onClick={() => {
                            
                            updateHouseholdUser({
                                id: foundUserObj.id
                            })
                        }}
                        >add to Household</button>  </div>
        </div>
      </section>
    </article>
  );
};



{/* <input type="text" name="description" required autoFocus className="form-control"
                        value={currentCategory.description}
                        onChange={changeCategoryDescriptionState}
                    />

const searchEntry = document.querySelector("input[id='userSearch']").value.toLowerCase()
const users = getUsers()
const foundUser = users.find(user => user.name.toLowerCase().includes(searchEntry))
if (searchEntry === "") {
    window.alert("Please enter a name to search")
} else if (foundUser) {
    resetFeed()
    setDisplayUserProfile(foundUser.id)
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
} else {
    window.alert("User not found")
}
} */}