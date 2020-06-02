import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles, theme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    responsiveImage: {
        width: '100%',
        maxWidth: '1600px',
        maxHeight: '75vh',
    },
    content: {
        position: "absolute",
        top: '25%',
        left: "75%",
        transform: "translate(-25%, -75%)",
        color: "white",
    }
}))

const Home = () => {

    const classes = useStyles();
   
    return (
        <div>
            <img src="../../public/home.jpg" alt="word riot" className={classes.responsiveImage}></img>
            <div className={classes.content}>
                <h1>Vocab Cards</h1>
                <p>A better way to remember words</p>
                <p>Photo by Raphael Schaller on Unsplash </p>
            </div>
        </div>
    )
}

export default Home;
    