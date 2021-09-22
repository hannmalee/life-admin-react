import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "./TaskProvider";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const TaskForm = () => {
  const history = useHistory();
  const { createTask, getTask, updateTask, getTasks } = useContext(TaskContext);
  const { taskId } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
  const [currentTask, setCurrentTask] = useState({
    title: "",
    description: "",
    is_completed: false,
    created_on: "",
    due_date: "",
    category: 0,
    assigned_to: 0,
    created_by: 0,
  });

  /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    */
  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    console.log("taskId", typeof taskId);
    if (taskId) {
      setIsEdit(true);
      getTask(taskId).then(
        (data) => {
          console.log(data);
          setCurrentTask({
            title: data.title,
            description: data.description,
            is_completed: Date.now,
            created_on: data.created_on,
            due_date: data.due_date,
            category: data.category,
            assigned_to: data.assigned_to,
            created_by: parseInt(localStorage.getItem("life-admin-token")),
          });
        },
        [taskId]
      );
    
    }})
  

      /*
        REFACTOR CHALLENGE START
        Can you refactor this code so that all property
        state changes can be handled with a single function
        instead of five functions that all, largely, do
        the same thing?
        One hint: [event.target.name]
    */
      const changeTaskTitleState = (event) => {
        const newTaskState = { ...currentTask };
        newTaskState.title = event.target.value;
        setCurrentTask(newTaskState);
      };

      const changeTaskDescriptionState = (event) => {
        const newTaskState = { ...currentTask };
        newTaskState.description = event.target.value;
        setCurrentTask(newTaskState);
      };

      const changeTaskDueDateState = (event) => {
        const newTaskState = { ...currentTask };
        newTaskState.due_date = event.target.value;
        setCurrentTask(newTaskState);
      };

      const changeTaskAssignedToState = (event) => {
        const newTaskState = { ...currentTask };
        newTaskState.assigned_to = event.target.value;
        setCurrentTask(newTaskState);
      };

      /* REFACTOR CHALLENGE END */

      return (
        <>
          <form className="taskForm">
            <h2 className="taskForm__title">add new task</h2>
            <fieldset>
              <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  name="title"
                  required
                  autoFocus
                  className="form-control"
                  value={currentTask.title}
                  onChange={changeTaskTitleState}
                />
              </div>
            </fieldset>

            <fieldset>
              <div className="form-group">
                <label htmlFor="description">description: </label>
                <input
                  type="text"
                  name="description"
                  required
                  autoFocus
                  className="form-control"
                  value={currentTask.description}
                  onChange={changeTaskDescriptionState}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="due_date">Due Date: </label>
                <input
                  type="text"
                  name="due_date"
                  required
                  autoFocus
                  className="form-control"
                  value={currentTask.due_date}
                  onChange={changeTaskDueDateState}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="assigned_to">
                  Assigned to *drop down menu*:{" "}
                </label>
                <input
                  type="text"
                  name="assigned_to"
                  required
                  autoFocus
                  className="form-control"
                  value={currentTask.assigned_to}
                  onChange={changeTaskAssignedToState}
                />
              </div>
            </fieldset>

            {/* You create the rest of the input fields for each game property */}

            <button
              type="submit"
              onClick={(evt) => {
                // Prevent form from being submitted
                evt.preventDefault();

                const task = {
                  title: setCurrentTask.title,
                  description: setCurrentTask.description,
                  is_completed: currentTask.is_completed,
                  created_on: Date.now,
                  due_date: currentTask.due_date,
                  category: currentTask.category,
                  assigned_to: currentTask.assigned_to,
                  created_by: parseInt(
                    localStorage.getItem("life-admin-token")
                  ),
                };

                // Send POST request to your API
                if (isEdit) {
                  task.id = taskId;
                  updateTask(task).then(() => history.push("/"));
                } else {
                  createTask(task).then(() => history.push("/"));
                }
              }}
              className="btn btn-primary"
            >
              Create
            </button>
          </form>
        </>
      );
  
};
