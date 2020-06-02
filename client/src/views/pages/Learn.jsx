import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, Fragment } from 'react';

import Card from '../components/Card';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
})

const data = [
    {
        id: 0, 
        img: "https://source.unsplash.com/dddQHervE04/275X140",
        category: "Common Word (lvl. 6)",
        word: "Ingratiate",
        grammar: "adjective",
        meaning: "gain favor with somebody by deliberate efforts",
    },
    {
        id: 0,
        img: "https://source.unsplash.com/63YVMrL2d6g/275X140",
        category: "Common Word (lvl. 2)",
        word: "Ephemeral",
        grammar: "verb",
        meaning: "lasting a very short time",
    },
    {
        id: 2,
        img: "https://source.unsplash.com/jeRdxTviubM/275X140",
        category: "Common Word (lvl. 2)",
        word: "Predeliction",
        grammar: "noun",
        meaning: "a strong liking",
    },
    {
        id: 3,
        img: "https://source.unsplash.com/JAg3uVD_Z1k/275X140",
        category: "X-word",
        word: "Exercate",
        grammar: "verb",
        meaning: "curse and hiss; dislike and criticize strongly",
    },
    
]
const Learn = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            {
                data.map(item => 
                    <Card data={item}/>)
            }
            
        </div>
    )
}

export default Learn;