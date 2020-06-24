import types from './types';
import { INITIAL_STATE } from '../store';

const pageReducers = (state = INITIAL_STATE.page, action) => {
    switch(action.type) {
        case types.CHANGE_PAGE:
            return { ...state, current: parseInt(action.payload) };
        case types.SET_INDICES:
            const { start, end } = action.payload;
            return { ...state, startIndex: parseInt(start), endIndex: parseInt(end) }
        default:
            return state;
    }
}

export default pageReducers;