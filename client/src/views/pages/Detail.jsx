import Card from '../components/detail/Card';
import Paper from '../components/detail/Paper';
import Tab from '../components/detail/Tab';
import AppBar from '../components/AppBar';
import { learnActions } from "../../redux/learn/";

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import grey from '@material-ui/core/colors/grey';

const color = grey[800];
console.log(color);


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: color,
        height: '100%'
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

export default function Detail() {

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
                <Grid item xs={12} lg={5} className={classes.card}>
                    { cardData.word &&
                        <Card
                            category={cardData.category}
                            word={cardData.word}
                            meaning={cardData.meaning}
                            grammar={cardData.grammar}
                            synonyms={cardData.synonyms}
                            antonyms={cardData.antonyms}
                            img_url={cardData.img_url}
                        />
                    }
                </Grid>
                <Grid item className={classes.content} xs={12} lg={3}>
                    { cardData.word && 
                        <Paper
                            word={cardData.word}
                            sentences={cardData.sentences}
                            mnemonic={cardData.mnemonic}
                        />
                    }
                </Grid>
                <Grid item xs={12} lg={4} >
                    {
                        cardData.cartoon && cardData.movie_links
                        && cardData.tv_links &&
                        <Tab
                        tvLinks={ cardData.tv_links }
                        movieLinks={ cardData.movie_links }
                        cartoon={ cardData.cartoon }
                        word={ cardData.word }
                        />
                    }
                </Grid>
            </Grid>
        </div>
    )
}