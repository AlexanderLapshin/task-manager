import { createStore, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./redux/reducers/rootReducer";

let middlewares = applyMiddleware(thunk);

if (process.env.NODE_ENV === "development") {
  middlewares = compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const configureStore = createStore(rootReducer, middlewares);

export default configureStore;
