import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import tasks from "./taskReducer";

export default combineReducers({
    routing: routerReducer,
    tasks
});
