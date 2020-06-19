import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';

import { alertActions } from '../../redux/alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SnackbarAlert = (props) => {
    const { id, severity, status, msg } = props.alertMsg;
    const dispatch = useDispatch();

    const handleSnackbarClose = () => {
        alertActions.clearAlert(dispatch)
    }
    return(
        <div>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={props.open}
                key={id}
                autoHideDuration={10000}
                onClose={handleSnackbarClose} 
            >
                <Alert onClose={handleSnackbarClose} severity={severity}>
                    {msg}
                </Alert>
            </Snackbar>
            {console.log(msg,". status code", status)}
        </div>
    )
}

export default SnackbarAlert;