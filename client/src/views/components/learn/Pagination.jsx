import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import Grid from '@material-ui/core/Grid';


import PAGE_CONSTANTS from '../../../utils/pagination';

const useStyles = makeStyles({
    text: {
        padding: 2
    },
    
});

export default function WordPagination(props) {
    const classes = useStyles();
    const { START, END, RANGE } = PAGE_CONSTANTS;
    
    {/*"https://source.unsplash.com/pVmjvK44Dao/275X140"*/}
    return (
        <Grid container spacing={1}>
            <Grid item xs={4}></Grid>
            <Grid  item xs={1} spacing={3}>
                <IconButton
                    aria-label="previous page"
                    onClick={()=>props.handleMovePage(false)}
                    disabled={props.page === START/RANGE}
                >
                    <SkipPreviousIcon/>
                </IconButton>
            </Grid>
            <Grid  item xs={1} spacing={3}>
                <p className={classes.text}>{props.page + 1}/5</p>
            </Grid>
            <Grid  item xs={1} spacing={3}>
                <IconButton
                    aria-label="next page"
                    onClick={()=>props.handleMovePage(true)}
                    disabled={props.page === parseInt((END/RANGE))}   
                >
                    <SkipNextIcon/>
                </IconButton>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
    );
}