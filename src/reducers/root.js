import {combineReducers} from "redux";
import auth from "./auth";
import {routerReducer} from "react-router-redux";
import {idbReducer} from "./idbReducer";


let reducer = combineReducers({
    idb: idbReducer,
    routing: routerReducer,
    auth: auth
});

export default reducer;