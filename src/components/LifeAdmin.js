import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Redirect } from "react-router";

export const LifeAdmin = () => (
  <>
    <Route render={() => {
            if (localStorage.getItem("life-admin-token")) {
                return <>
                    <Route> 
                      <NavBar /> 
                    </Route>
                    <Route>
                    <ApplicationViews />
                      </Route>  
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
