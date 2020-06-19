/*
 Landing "Not Found" page for invalid urls
*/

/* Module imports */
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'

/* Styling */
const useStyles = makeStyles({
    image: {
        width: '100vw',
        height: '100vh',
        display: 'block',
        margin: 'auto',
        position: 'relative'
    },
    paper: {
        position: 'absolute',
        textAlign: 'center',
        top: 16
    }
});

/* Component */
const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.d}>
            <img src="undraw_page_not_found.svg"
                className={classes.image}
                alt='Not found' />

            <Paper elevation={3} className={classes.paper}>
                <IconButton component={Link} to={'/'} color="secondary">
                    <HomeIcon/>
                </IconButton>
                <br/>
                <Typography variant="subtitle1" component="p">
                    We can't find the page you're looking for!
                </Typography>
                <Typography variant="p" gutterBottom component={Link} to={'/'}>
                    Go back home?
                </Typography>
                
            </Paper>
        </div>
    )
}


export default NotFound;