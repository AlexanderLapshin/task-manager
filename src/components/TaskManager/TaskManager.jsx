import React from "react";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";
import "./TaskManager.css"

const TaskManager = ({ tasks, addTask, deleteTask }) => {
  return (
    <div className="task-list-container">
      <TaskInput addTask={addTask} />
      <h3>Your tasks</h3>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
};

export default TaskManager;
