import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { authActions } from "../../redux/auth/";
import RegisterForm from "./authentication/Register";
import { Paper } from '@material-ui/core';
import LoginForm  from "./authentication/Login";

const top = 50, left = 50;
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    minWidth: 275,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [isSignUp, setSignUp] = React.useState(true);
  const dispatch = useDispatch();
  const openedModal = useSelector(state => state.auth.openModal);
  const handleClose = () => {
    authActions.setAuthModal(dispatch, false)
  };
  const handleSignUpChange = () => {
    setSignUp(!isSignUp);
  };

  return (
    <Modal
      open={openedModal}
      onClose={handleClose}
      aria-labelledby="auth-modal-title"
      aria-describedby="auth-modal-description"
    >
     {
       isSignUp ?
       <RegisterForm toggle={handleSignUpChange} className={classes.paper}/>
       :
       <LoginForm toggle={handleSignUpChange} className={classes.paper}/>
     }
    </Modal>
  );
}