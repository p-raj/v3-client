import * as TYPE from "../actions/auth";
import {FAILED, START, SUCCESS} from "../common/constants";

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
        default:
            return state;
    }
}
