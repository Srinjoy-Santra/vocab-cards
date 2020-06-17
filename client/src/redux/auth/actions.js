import types from './types';
import { alertActions } from '../alert';

import axios from 'axios';

const setAuthModal = (dispatch, isOpen) => 
    dispatch({
        type: types.AUTH_MODAL,
        payload: isOpen
    })

const register = (dispatch, formValues ) => {

    const { name, email, password } = formValues; 
    const config = {
        headers: { 'Content-Type': 'application/json' }
    };

    const body = JSON.stringify({ name, email, password })

    axios
        .post('/api/users', body, config)
        .then(res => {
            alertActions.setAlert(dispatch, {
                status: res.status,
                msg: { msg: `Welcome, ${res.data.user.name}` },
                id: types.REGISTER_SUCCESS,
                severity: 'success'
            })
            dispatch({
                type: types.REGISTER_SUCCESS,
                payload: res.data
            })
        }
        )
        .catch(err => {

            alertActions.setAlert(dispatch, {
                status: err.response.status,
                msg: err.response.data,
                id: types.REGISTER_FAIL,
                severity: 'error'
            })
            dispatch({
                type: types.REGISTER_FAIL
            })
        });
};

const login = (dispatch, formValues ) => {

    const { email, password } = formValues; 
    const config = {
        headers: { 'Content-Type': 'application/json' }
    };

    const body = JSON.stringify({ email, password })

    axios
        .post('/api/auth', body, config)
        .then(res => {
            alertActions.setAlert(dispatch, {
                status: res.status,
                msg: { msg: `Hi, ${res.data.user.name}` },
                id: types.LOGIN_SUCCESS,
                severity: 'success'
            })
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            alertActions.setAlert(dispatch, {
                status: err.response.status,
                msg: err.response.data,
                id: types.LOGIN_FAIL,
                severity: 'error'
            })
            dispatch({
                type: types.LOGIN_FAIL
            })
        });
};

const logout = (dispatch) => {
    alertActions.setAlert(dispatch, {
        status: 200,
        msg: { msg: `Bye, we will miss you!` },
        id: types.LOGOUT_SUCCESS,
        severity: 'warning'
    })
    dispatch({
        type: types.LOGOUT_SUCCESS
    })
}
    

export default{
    setAuthModal,
    register,
    logout,
    login
}