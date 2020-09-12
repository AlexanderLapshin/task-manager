import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import TaskManager from "../TaskManager/TaskManager";

const MainLayout = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const deleteTask = taskName => {
    setTasks(tasks.filter(value => value !== taskName));
  };



  return (
    <div className="main-layout">
      <Header />
      <Switch>
        <Route path="/task-manager">
          <TaskManager
            tasks={tasks}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        </Route>
        <Route path="/dashboard">
          <Dashboard tasks={tasks} />
        </Route>
        <Redirect to="/task-manager">
          <TaskManager
            tasks={tasks}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        </Redirect>
      </Switch>
    </div>
  );
};

export default MainLayout;
