import types from './types';

const setError = (dispatch, alertMsg) =>
    dispatch(
        {
            type: types.SET_ERROR, 
            payload: alertMsg
        });

const setWarning = (dispatch, alertMsg) =>
    dispatch(
        {
            type: types.SET_WARNING, 
            payload: alertMsg
        });

const setInfo = (dispatch, alertMsg) =>
    dispatch(
        {
            type: types.SET_INFO, 
            payload: alertMsg
        });

const setSuccess = (dispatch, alertMsg) =>
    dispatch(
        {
            type: types.SET_SUCCESS, 
            payload: alertMsg
        });

export default {
    setError,
    setWarning,
    setInfo,
    setSuccess
}