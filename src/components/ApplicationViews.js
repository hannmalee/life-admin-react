import React from "react";
import { Route } from "react-router-dom";
import { CategoryList } from "./category/CategoryList";
import { CategoryProvider } from "./category/CategoryProvider";
import { TaskProvider } from "./task/TaskProvider";
import { TaskList } from "./task/TaskList";
import { CategoryForm } from "./category/CategoryForm";
import { TaskForm } from "./task/TaskForm";
import { HouseholdUserProvider } from "./auth/HouseholdUserProvider";
import { HouseholdUserProfile } from "./auth/HouseholdUser";
import { CategoryDetail } from "./category/CategoryDetail";
import { UserSearch } from "./auth/UserSearch";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
        >
        <HouseholdUserProvider>
        <CategoryProvider>
          <TaskProvider>
            <Route exact path="/">
              <CategoryList />
            </Route>
            <Route exact path="/categories/new">
              <CategoryForm />
            </Route>
            {/* <Route exact path="/categories/:categoryId(\d+)/update">
              <CategoryForm />
            </Route> */}
            <Route exact path="/categories/:categoryId">
              <CategoryDetail />
            </Route>
            <Route exact path="/tasks">
              <TaskList />
            </Route>
            <Route exact path="/:categoryId(\d+)/tasks/new">
              <TaskForm />
            </Route>
          </TaskProvider>
        </CategoryProvider>
          <Route exact path="/profile">
            <HouseholdUserProfile />
          </Route>
          <Route exact path="/search">
            <UserSearch />
          </Route>
        </HouseholdUserProvider>
      </main>
    </>
  );
};
