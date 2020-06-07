import Card from '../components/detail/Card';
import Paper from '../components/detail/Paper';
import { cardsData } from '../../redux/testData';
import AppBar from '../components/AppBar';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    container:{
        margin: 8,
    },
    paper: {
        minWidth: 275,
        maxWidth: 750,
        minHeight: 350,
        marginTop: 0
    },
    card: {
        margin: 0
    },
    media: {
        height: 140,
        width: 275
    },
});

export default function Detail(props) {

    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar />
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} md={6} className={classes.card}>
                    <Card data={ cardsData[4] } />
                </Grid>
                <Grid item className={classes.content} xs={12} md={6}>
                    <Paper data={ cardsData[4] } />
                </Grid>
            </Grid>
        </div>
    )
}