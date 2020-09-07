import React from "react";
import TaskInput from "./TaskInput/TaskInput";
import TaskList from "./TaskList/TaskList";

const TaskManager = ({ tasks, addTask }) => {
  return (
    <div>
      <TaskInput addTask={addTask} />
      <h3>Your tasks</h3>
      <TaskList tasks={tasks}/>
    </div>
  );
};

export default TaskManager;
