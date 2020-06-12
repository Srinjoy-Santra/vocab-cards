import ExpansionPanel from './sentences/ExpansionPanel';
import Highlight from './sentences/Highlight';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    paper: {
        width: 275,
        //minHeight: 326,
        marginTop: 8,
        padding: 12
    },
    pos: {
        marginTop: 12,
    }
});



export default function WordPaper(props){

    const classes = useStyles();
    const { word, sentences, mnemonic } = props;

    return (
        <Paper className={classes.paper}>
            <Typography className={classes.pos} color="textSecondary">
                Example
            </Typography>
            <Highlight sentence={sentences.my} checkWord={word}/>
            { (sentences.ge || sentences.econ)
                 && <ExpansionPanel ge={sentences.ge} econ={sentences.econ} word={word}/>
            }
            <Typography className={classes.pos} color="textSecondary">
                Mnemonic: 
            </Typography>
            <Typography variant="subtitle1" component="p">
                {mnemonic}
            </Typography>
        </Paper>
    )
}
