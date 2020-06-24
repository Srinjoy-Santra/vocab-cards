import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from "../../redux/auth/";
import AuthModal from "../components/AuthModal";

const useStyles = makeStyles(theme => ({
    imgContainer: {
        backgroundImage: "url('https://source.unsplash.com/JXb5j1vdWSI/1600X900')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: 450
    },
    content: {
        position: "absolute",
        top: '50%',
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing(1),
    },
    footer: {
        textAlign: 'center',
        margin: 16
    },
    img: {
        width: 256,
        height: 256,
        margin: 16
    },
    feature: {
        margin: 24,
        maxWidth: 360
    },
    featureContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.light,
        padding: 64
    }
}))

const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const openAuthModal = () => {
        authActions.setAuthModal(dispatch, true);
    }

    return (
        <Fragment>
            <Grid
                container
                direction="column"
                justify="flex-end"
                aligntItems="right"
                className={classes.imgContainer}
            >
                <div className={classes.content}>
                    <Typography variant="h2" component="h1">
                        Vocab Cards
                    </Typography>
                    <div>
                        {
                        isAuthenticated ?
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<VerifiedUserIcon />}
                            disabled
                        >
                            Verified
                        </Button>
                        :
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.button}
                            startIcon={<PersonAddIcon />}
                            onClick={openAuthModal}
                        >
                            Login
                        </Button>
                        }
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
            </Grid>
            <Grid container spacing={1} className={classes.featureContainer}>
                <Paper item component={Grid} className={classes.feature}>
                    <img src='undraw_online_learning.svg' alt='learn' className={classes.img}/>
                    <Typography variant="h5" component="h1" align='center' gutterBottom color="secondary">
                        Learn Online
                    </Typography>
                    <Typography variant="body1" component="p" align='center' color='textSecondary'>
                        Access from anywhere
                    </Typography>
                </Paper>
                <Paper item component={Grid} className={classes.feature}>
                    <img src='undraw_searching.svg' alt='learn' className={classes.img}/>
                    <Typography variant="h5" component="h1" align='center' gutterBottom color="secondary">
                        Easy Search
                    </Typography>
                    <Typography variant="body1" component="p" align='center' color='textSecondary'>
                        Access any word
                    </Typography>
                </Paper>
                <Paper item component={Grid} className={classes.feature}>
                    <img src='undraw_quiz.svg' alt='learn' className={classes.img}/>
                    <Typography variant="h5" component="h1" align='center' gutterBottom color="secondary">
                        Quiz
                    </Typography>
                    <Typography variant="body1" component="p" align='center' color='textSecondary'>
                        Play hard*
                    </Typography>
                </Paper>
                <Paper item component={Grid} className={classes.feature}>
                    <img src='undraw_Memory_storage.svg' alt='learn' className={classes.img}/>
                    <Typography variant="h5" component="h1" align='center' gutterBottom color="secondary">
                        Long Retention
                    </Typography>
                    <Typography variant="body1" component="p" align='center' color='textSecondary'>
                        Remember everything
                    </Typography>
                </Paper>
            </Grid>
            <AuthModal />
            <footer className={classes.footer}>
                <Typography variant="p" component="p">
                    Currently v0.0.1. Released under the MIT License. Copyright © 2020 Vocab-Card.
                </Typography>
            </footer>
        </Fragment>
    )
}

export default Home;
