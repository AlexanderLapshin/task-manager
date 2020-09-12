import React from "react";

import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";
import "./TaskManager.css";

const TaskManager = () => {
    return (
        <div className="task-list-container">
            <TaskInput/>
            <h3>Your tasks</h3>
            <TaskList/>
        </div>
    );
};

export default TaskManager;
