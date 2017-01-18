import {createStore, applyMiddleware, compose} from "redux";
import reducer from "../reducers/root";
import thunk from "redux-thunk";
import createLogger from "redux-logger";


// Logger must be the last middleware in chain, otherwise it will log thunk and others, not actual actions
// https://github.com/evgenyrodionov/redux-logger/issues/20
const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers(
    applyMiddleware(
        thunk,
        logger,
    )
));

export default store;
