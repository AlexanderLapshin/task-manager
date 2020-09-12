import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { deleteTask } from "../../../redux/actions/taskActions";

import "./Task.css"

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <label>
        <input className="task__checkbox" type="checkbox" />
        {task}
      </label>
      <button
        onClick={() => deleteTask(task)}
        className="task__button task__button_delete"
      >
        x
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteTask,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Task);
