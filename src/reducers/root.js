import {combineReducers} from "redux";
import auth from "./auth";


let reducer = combineReducers({
    auth: auth
});

export default reducer;