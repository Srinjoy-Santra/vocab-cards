import types from './types';

import { INITIAL_STATE } from '../store';

const authReducers = (state = INITIAL_STATE.auth, action) => {
    switch(action.type) {
        case types.USER_LOADING:
            return { ...state, isLoading: true }
        case types.USER_LOADED:
            return { ...state, isAuthenticated: true, isLoading: false, user: action.payload }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return { ...state, ...action.payload, isAuthenticated: true, isLoading: false };
        case types.AUTH_ERROR :
        case types.LOGIN_FAIL :
        case types.REGISTER_FAIL :
        case types.LOGOUT_SUCCESS :
            localStorage.removeItem('token')
            return { ...state, token: null, user: null, isAuthenticated: false, isLoading: false }
        case types.AUTH_MODAL:
            return { ...state, openModal: action.payload }
        default:
            return state;
    }
}

export default authReducers;