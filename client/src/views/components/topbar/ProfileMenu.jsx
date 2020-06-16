import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { useDispatch } from 'react-redux';

import { authActions } from "../../../redux/auth";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function ProfileMenu(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const dispatch = useDispatch();
    const openAuthModal = () => {
        authActions.setAuthModal(dispatch, true);
    }
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        authActions.logout(dispatch);
    }

    return (
        <Fragment>
            {
                props.auth ?
                    <Fragment>
                        <IconButton
                            aria-label="quiz feature"
                            aria-controls="menu-appbar"
                            onClick={console.log("Quiz")}
                            color="inherit"
                        >
                            <QuestionAnswerIcon />
                        </IconButton>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleLogout}>Log out</MenuItem>
                        </Menu>
                    </Fragment>
                    :
                    <Fragment>
                        <IconButton
                            aria-label="login current user"
                            aria-controls="button-appbar"
                            onClick={openAuthModal}
                            color="inherit"
                        >
                            <PersonAddIcon />
                        </IconButton>
                    </Fragment>
            }

        </Fragment>
    );
}
