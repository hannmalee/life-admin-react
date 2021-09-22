import React, { useEffect, useContext } from "react";
import { HouseholdUserContext } from "./HouseholdUserProvider";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useRef } from "react";
// import "./Profile.css"

export const UserSearch = () => {
  const {
    householdUser,
    getHouseholdUsers,
    householdUsers,
  } = useContext(HouseholdUserContext);

  const email = React.createRef();



  useEffect(() => {
    getHouseholdUsers()
  }, []);

  return (
    <article className="profile">
      <header>
        <h1>Search by email:</h1>
      </header>
      <section className="profile__info">
        <header className="profile__header">
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <button
            onClick={evt => {
                // Prevent form from being submitted

                // Send POST request to your API
                if (evt === householdUsers.user?.email) {

                    return <>
                    <div> found </div>
                    </>
                } else {
                    return <>
                    <div> not found </div>
                    </>
                }
                
            }}
            className="btn btn-primary"
          >
            search
          </button>
        </header>

        <div className="profile__title">
          <h2> Search Results: </h2>
        </div>
      </section>
    </article>
  );
};