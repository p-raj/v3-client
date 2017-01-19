import {combineReducers} from "redux";
import authReducer from "./authReducer";
import {routerReducer} from "react-router-redux";
import {idbReducer} from "./idbReducer";
import refreshTokenReducer from "./refreshTokenReducer";


let reducer = combineReducers({
    idb: idbReducer,
    routing: routerReducer,
    auth: authReducer,
    refreshToken: refreshTokenReducer,
});

export default reducer;