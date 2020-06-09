import types from './types';
import { INITIAL_STATE } from '../store';

const sectionReducers = (state = INITIAL_STATE.section, action) => {
    switch(action.type) {
        case types.CHANGE_SECTION:
            return { ...state, current: action.payload };
        case types.CHANGE_PAGE:
            return { ...state, page: parseInt(action.payload) };
        default:
            return state;
    }
}

export default sectionReducers;