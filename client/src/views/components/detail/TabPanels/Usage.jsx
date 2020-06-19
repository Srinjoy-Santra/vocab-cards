import ExpansionPanel from './sentences/ExpansionPanel';
import Highlight from './sentences/Highlight';

import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        //minHeight: 326,
        margin: 8,
        padding: 24
    },
    pos: {
        marginTop: 12,
    }
});



export default function Usage(props){

    const classes = useStyles();
    const { word, sentences, mnemonic } = props;

    return (
        <div className={classes.root}>
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
        </div>
    )
}
