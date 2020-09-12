import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import TaskManager from "../TaskManager/TaskManager";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Switch>
        <Route path="/task-manager">
          <TaskManager />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Redirect to="/task-manager">
          <TaskManager />
        </Redirect>
      </Switch>
    </div>
  );
};

export default MainLayout;
