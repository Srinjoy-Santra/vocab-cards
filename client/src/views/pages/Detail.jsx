import Card from '../components/detail/Card';
import Paper from '../components/detail/Paper';
import AppBar from '../components/AppBar';
import { learnActions } from "../../redux/learn/";

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

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
    const dispatch = useDispatch();
    const { word } = useParams();

    const cardData = useSelector(state => state.learn.current);

    useEffect(() => {
        (async () => {
            await learnActions.getWord(dispatch, word)
             
        })()
    }, [word])

    return (
        <div className={classes.root} key={word}>
            <AppBar />
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={12} md={6} className={classes.card}>
                    { cardData.word && <Card data={ cardData } /> }
                </Grid>
                <Grid item className={classes.content} xs={12} md={6}>
                    { cardData.word && <Paper data={ cardData } /> }
                </Grid>
            </Grid>
        </div>
    )
}