import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTask(task);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        name="task"
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Task name"
      ></input>
      <button className="task-form__btn" type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
