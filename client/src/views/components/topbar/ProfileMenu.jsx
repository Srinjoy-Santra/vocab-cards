import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

import { authActions } from "../../../redux/auth";


export default function ProfileMenu(props) {

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
                        <Tooltip title="quiz">
                            <IconButton
                                aria-label="quiz feature"
                                aria-controls="menu-appbar"
                                onClick={console.log("Quiz")}
                                color="inherit"
                                disabled
                            >
                                <QuestionAnswerIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="account">
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
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
                        <Tooltip title="login">
                            <IconButton
                                aria-label="login current user"
                                aria-controls="button-appbar"
                                onClick={openAuthModal}
                                color="inherit"
                            >
                                <PersonAddIcon />
                            </IconButton>
                        </Tooltip>
                    </Fragment>
            }

        </Fragment>
    );
}
