import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles, theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authActions } from "../../redux/auth/";
import AuthModal from "../components/AuthModal";

const useStyles = makeStyles(theme => ({
    responsiveImage: {
        width: '100%',
        maxWidth: '1600px',
        maxHeight: '75vh',
    },
    content: {
        position: "absolute",
        top: '37vh',
        left: "80%",
        transform: "translate(-25%, -75%)",
        color: "white",
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(1),

    },
    footer: {
        textAlign: 'center'
    }
}))

const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const openAuthModal = () => {
        authActions.setAuthModal(dispatch, true);
    }

    return (
        <div>
            <img src="https://source.unsplash.com/JXb5j1vdWSI/1600X900" alt="Photo by Jr Korpa on Unsplash" className={classes.responsiveImage}></img>
            <div className={classes.content}>
                <Typography variant="h2" component="h1">
                    Vocab Cards
                </Typography>
                <div>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        startIcon={<PersonAddIcon />}
                        onClick={openAuthModal}
                    >
                        Login
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        startIcon={<CastForEducationIcon />}
                        component={RouterLink}
                        to="/learn"
                    >
                        Learn
                    </Button>
                </div>
            </div>
            <AuthModal/>
            <footer className={classes.footer}>
            <   Typography variant="p" component="p">
                    Currently v0.0.1. Released under the MIT License. Copyright © 2020 Vocab-Card.
                </Typography>
            </footer>
        </div>
    )
}

export default Home;
