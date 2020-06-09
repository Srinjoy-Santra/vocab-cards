import types from './types';
import { INITIAL_STATE } from '../store';

const learnReducers = (state = INITIAL_STATE.learn, action) => {
    switch(action.type) {
        case types.GET_WORDS:
            return { ...state, all: action.payload };
        case types.GET_WORD:
            return { ...state, current: action.payload };
        default:
            return state;
    }
}

export default learnReducers;