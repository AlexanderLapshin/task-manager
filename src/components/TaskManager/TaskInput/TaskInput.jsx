import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addTask } from "../../../redux/actions/taskActions";

import "./TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
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
      <button className="task-form__btn" type="submit">
        Add
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addTask }, dispatch);

export default connect(null, mapDispatchToProps)(TaskInput);
