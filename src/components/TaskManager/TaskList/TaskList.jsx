import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index} className="task">
            <label>
              <input className="task__checkbox" type="checkbox" />
              {task}
            </label>
            <button onClick={() => deleteTask(task)} className="task__button task__button_delete">x</button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
