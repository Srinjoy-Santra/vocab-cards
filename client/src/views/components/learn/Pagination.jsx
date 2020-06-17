import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

import PAGE_CONSTANTS from '../../../utils/pagination';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    text: {
        padding: 8,
        textAlign: "center"
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        maxWidth: 240,
        justifyContent: 'center',
        margin: 'auto',
        paddingTop: 8
    }
}));

export default function WordPagination(props) {
    const classes = useStyles();
    const { START, END, RANGE } = PAGE_CONSTANTS;
    
    return (
        <Paper className={classes.controls} elevation={3} >
            <IconButton
                    aria-label="previous page"
                    color="secondary"
                    edge="end"
                    className={classes.nextButton}
                    onClick={()=>props.handleMovePage(false)}
                    disabled={props.page === START/RANGE}
                >
                    <SkipPreviousIcon/>
            </IconButton>
            <Typography className={classes.text} variant="subtitle1" color="secondary">
                {props.page + 1}/5
            </Typography>
            <IconButton
                    aria-label="next page"
                    color="secondary"
                    className={classes.nextButton}
                    onClick={()=>props.handleMovePage(true)}
                    disabled={props.page === parseInt((END/RANGE))}   
            >
                <SkipNextIcon/>
            </IconButton>
        </Paper>
    );
}