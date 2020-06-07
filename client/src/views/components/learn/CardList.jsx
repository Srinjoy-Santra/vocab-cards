import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, Fragment } from 'react';
import Card from './Card';
import Typography from '@material-ui/core/Typography'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';

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
    const [cardsData, setCardsData] = useState(props.cardsData.slice(0,4).sort(() => Math.random() - 0.5));
    const openThisSection = () => {
        if(props.openedSection === props.title){
            props.openSection(null);
            setCardsData(props.cardsData.slice(0,4).sort(() => Math.random() - 0.5));
        }
        else{
            props.openSection(props.title);
            setCardsData(props.cardsData);
        }
    }

    return (
        <Fragment>
            <Typography variant="h3" component="h3" align="center">{ props.title }</Typography>
            <div className={classes.container}>
                {
                    cardsData.map(item =>
                        <Card data={item} />)
                }
                <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    endIcon={<KeyboardArrowRightIcon />}
                    onClick={openThisSection}
                >
                    {(props.openedSection !== props.title)? "See More": "See All"}
                </Button>
            </div>
        </Fragment>
    )
}

export default CardList;