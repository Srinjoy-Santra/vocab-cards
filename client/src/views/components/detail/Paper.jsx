import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    paper: {
        minWidth: 275,
        maxWidth: 550,
        minHeight: 326,
        marginTop: 8,
        padding: 12
    },
    pos: {
        marginTop: 12,
    },
});

const Highlight = ({sentence='', checkWord}) => (
    <Typography variant="body2" component="p"
        dangerouslySetInnerHTML={{
        __html:
        sentence.split(' ').map(word =>
            (word.includes(checkWord.toLowerCase())?
             `<strong>${word}</strong>`
             :
             word)).join(' ')

    }}
    >
    </Typography>
)

export default function WordPaper(props){

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
                { props.data.word }
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Example
            </Typography>
            {console.log(props.data.sentence)}
            <Highlight sentence={props.data.sentence} checkWord={props.data.word}/>
            <Typography className={classes.pos} color="textSecondary">
                Mnemonic
            </Typography>
            <Typography variant="body2" component="p">
                {props.data.mnemonic}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Antonyms
            </Typography>
            <Typography variant="body2" component="p">
                {props.data.antonyms}
            </Typography>
            <Typography variant="body2" component="p">
                {props.data.synonyms}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Synonyms
            </Typography>
            
        </Paper>
    )
}
