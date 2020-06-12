import types from './types';
import { INITIAL_STATE } from '../store';

const learnReducers = (state = INITIAL_STATE.alerts, action) => {
    const { title, message, canClose } = action.payload;
    switch(action.type) {
        case types.SET_ERROR:
        case types.SET_WARNING:
        case types.SET_INFO:
        case types.SET_SUCCESS:
            return [ ...state, { title, message, canClose } ];
        default:
            return state;
    }
}

export default learnReducers;