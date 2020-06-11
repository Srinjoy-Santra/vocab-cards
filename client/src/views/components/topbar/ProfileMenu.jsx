import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

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

const auth = true;
export default function ProfileMenu() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                    label={auth ? 'Logout' : 'Login'}
                />
            </FormGroup>
            {
                auth ?
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
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </Fragment>
                    :
                    <Fragment>
                        <IconButton
                            aria-label="login current user"
                            aria-controls="button-appbar"
                            onClick={()=>console.log("login")}
                            color="inherit"
                        >
                            <PersonAddIcon />
                        </IconButton>
                    </Fragment>
            }

        </Fragment>
    );
}
