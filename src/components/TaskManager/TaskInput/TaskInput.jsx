import React, { useState } from "react";


const TaskInput = ({addTask}) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{fontWeight: "bold", display: "block"}}>Add new task</label>
      <input name="task" type="text" value={task} onChange={handleChange} placeholder="Task name"></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
