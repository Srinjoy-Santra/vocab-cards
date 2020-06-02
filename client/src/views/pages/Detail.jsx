import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    responsiveImage: {
        width: '100%',
        maxWidth: '1600px',
        maxHeight: '75vh',
    },
});

export default function Detail(props) {

    const classes = useStyles();
    
    return (
        <div>
            <img src="benevolent.jpg" alt="word riot" className={classes.responsiveImage}></img>
            <div className={classes.content}>
                <h1>Vocab Cards</h1>
                <p>A better way to remember words</p>
                <p>Photo by Raphael Schaller on Unsplash </p>
            </div>
        </div>
    )
}