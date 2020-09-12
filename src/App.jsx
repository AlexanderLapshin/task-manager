import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={MainLayout} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
