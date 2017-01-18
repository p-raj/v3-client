import * as TYPE from "../actions/auth";
import {FAILED, START, SUCCESS} from "../common/constants";
import {LOAD_REDUX_STATE} from "../actions/loadPersistantData";

export default function otpRequest(state = {}, action) {
    switch (action.type) {
        case TYPE.REQUEST_AUTH_START:
            return {
                ...state,
                ...action.payload,
                status: START
            };
        case TYPE.REQUEST_AUTH_SUCCESS:
            return {
                ...state,
                ...action.payload,
                status: SUCCESS
            };
        case TYPE.REQUEST_AUTH_ERROR:
            return {
                ...state,
                status: FAILED
            };
        case LOAD_REDUX_STATE:
            if (action.payload)
                return {...action.payload.auth};

            return {};
        default:
            return state;
    }
}
