import types from './types';
import { INITIAL_STATE } from '../store';

const alertReducers = (state = INITIAL_STATE.alert, action) => {

    switch(action.type) {
        case types.SET_ERROR:
        case types.SET_WARNING:
        case types.SET_INFO:
        case types.SET_SUCCESS:
            return { ...action.payload };
        case types.CLEAR_ALERT:
            return { 
                msg: null,
                status: null,
                id: null,
                severity: null 
            };
        default:
            return state;
    }
}

export default alertReducers;