import React from "react";
import { connect } from "react-redux";

import Task from "../Task/Task";

import "./TaskList.css";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task task={task}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.data,
  };
};

export default connect(mapStateToProps)(TaskList);
