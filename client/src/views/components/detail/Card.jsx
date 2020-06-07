import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 550,
        minHeight: 350,
        margin: 8
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 280,
        width: 550
    },
});

export default function WordCard(props) {
    const classes = useStyles();
    console.log(props);
    
    {/*"https://source.unsplash.com/pVmjvK44Dao/275X140"*/}
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.data.img_url}                
                title={props.data.word}
            />
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.data.category}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.data.word}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.data.grammar}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.data.meaning}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}