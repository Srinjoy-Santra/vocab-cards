import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { getImgURL } from '../../../utils/unsplashImage'

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
        width: '100%'
    },
    opos: {
        marginTop: 12,
    },
    meaning: {
        margin: 'auto'
    },
    nyms:{
        paddingRight: 12,
    }
});

export default function WordCard(props) {
    const classes = useStyles();
    
    const { img_url, category, word, meaning, grammar, synonyms, antonyms } = props;
    
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={getImgURL(img_url)}
                title={word}
            />
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {category}
                        </Typography>
                        <Typography variant="h4" component="h2" color="secondary">
                            {word}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {grammar}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.meaning}>
                        <Typography variant="body1" component="p" >
                            {meaning}
                        </Typography>
                    </Grid>
                </Grid>
                {
                    ( synonyms.length > 0 || antonyms.length > 0 ) && 
                    <Grid container>
                        {
                            synonyms.length > 0 &&
                            <Grid item xs={12} md={6} className={classes.nyms}>
                                <Typography className={classes.opos} color="textSecondary">
                                    Synonyms
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {synonyms.join(', ')}
                                </Typography>
                            </Grid>
                        }
                        {
                            antonyms.length > 0 &&
                            <Grid item xs={12} md={6}>
                                <Typography className={classes.opos} color="textSecondary">
                                    Antonyms
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {antonyms.join(', ')}
                                </Typography>
                            </Grid>
                        }
                </Grid>
                }
            </CardContent>
        </Card>
    );
}