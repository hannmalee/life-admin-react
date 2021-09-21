import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./category/CategoryList"
import { CategoryProvider } from "./category/CategoryProvider.js"
import { TaskProvider } from './task/TaskProvider'
import { TaskList } from "./task/TaskList"
import { CategoryForm } from "./category/CategoryForm.js"
import { TaskForm } from "./task/TaskForm.js"
import { HouseholdUserProvider } from "./auth/HouseholdUserProvider"
import { HouseholdUser } from "./auth/HouseholdUser"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <CategoryProvider>
                <Route exact path="/">
                    <CategoryList />
                </Route>
                <Route exact path="/categories/new">
                    <CategoryForm />
                </Route>
                <Route exact path="/categories/:categoryId(\d+)/update">
                    <CategoryForm />
                </Route>
                <TaskProvider>
                    <Route exact path="/tasks">
                        <TaskList />
                    </Route>
                    <Route exact path="/tasks/new">
                        <TaskForm />
                    </Route>
                </TaskProvider>
            </CategoryProvider>
            <HouseholdUserProvider>
                <Route exact path="/household_user">
                    <HouseholdUser />
                </Route>
            </HouseholdUserProvider>
        </main>
    </>
}