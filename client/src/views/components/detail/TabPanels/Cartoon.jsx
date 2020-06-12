import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        padding: 24
    },
    pos: {
        marginTop: 12,
    },
    cartoon: {
        width: 275,
        height: 360,
        margin: 'auto'
    },
    link:{
        textAlign: 'center',
    }
});

export default function CartoonPaper(props){

    const classes = useStyles();
    const { word, cartoon } = props;

    return (
        <Grid container className={classes.root}>
            <Grid item xs={8}>
                <img src={cartoon} alt={word} className={classes.cartoon}/>
            </Grid>
            <Grid item xs={4} className={classes.link}>
                <Typography variant="subtitle1" component="p">
                    Source:
                    <br/>
                    <Link href='https://greverbalcourse.com/p/gre-vocab-cartoons' color='secondary' >
                        'GRE Funny Cartoons' by Vince Kotchian
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    )
}
