import types from './types';

const setAlert = (dispatch, payload) =>
{
    const { msg, status, id, severity } = payload;
    let type;
    switch(severity){
        case 'error': type = types.SET_ERROR; break;
        case 'warning': type = types.SET_WARNING; break;
        case 'info': type = types.SET_INFO; break;
        case 'success': type = types.SET_SUCCESS; break;
        default: type = types.SET_ALERT
    }

    dispatch(
        {
            type, 
            payload: { msg: msg.msg, severity, status, id }
        });
}

const clearAlert = (dispatch) => {
    dispatch(
        {
            type: types.CLEAR_ALERT
        });
}
export default {
    setAlert,
    clearAlert
}