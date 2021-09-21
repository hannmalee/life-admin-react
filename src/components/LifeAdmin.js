import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Redirect } from "react-router";

export const LifeAdmin = () => (
  <>
    <Route>
      {localStorage.getItem("life-admin-token") ? (
        <>
          <NavBar />
          <ApplicationViews />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
