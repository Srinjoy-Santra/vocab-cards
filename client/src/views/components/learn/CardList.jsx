import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, Fragment } from 'react';
import Card from './Card';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    },
})

const CardList = (props) => {

    const classes = useStyles();
    //const [cardsData, setCardsData] = useState(props.cardsData.slice(0,4).sort(() => Math.random() - 0.5));

    return (
        <Fragment>
            
            <div className={classes.container}>
                {
                    props.cardsData.sort(() => Math.random() - 0.5).map(item =>
                        <Card data={item} />)
                }
            </div>
        </Fragment>
    )
}

export default CardList;