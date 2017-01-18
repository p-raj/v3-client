import {combineReducers} from "redux";
import auth from "./auth";
import {idbReducer} from "./idbReducer";


let reducer = combineReducers({
    idb: idbReducer,
    auth: auth
});

export default reducer;