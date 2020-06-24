import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../components/AppBar';
import CardList from '../components/learn/CardList';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { sectionActions } from "../../redux/section/";
import { pageActions } from "../../redux/page/";
import { learnActions } from "../../redux/learn/";
import WordPagination from "../components/learn/Pagination";
import AuthModal from "../components/AuthModal";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    },
    formControl: {
        display: 'flex',
        margin: 8
    }
})


const Learn = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [openedSection, openSection] = useState(
        useSelector(state => state.section.current)
    );

    const cardsData = useSelector(state => state.learn.all);
    const { current: page, startIndex, endIndex, itemsPerPage } = useSelector(state => state.page);   
    
    useEffect(() => {
        (async () => {
            await learnActions.getWords(dispatch, page)

        })()
    }, [page])

    const handleSectionChange = (event) => {
        const sectionName = event.target.value;
        openSection(sectionName);
        sectionActions.setSection(dispatch, sectionName);
    }

    
    const handleMovePage = (event, value) => {

        value = value - 1
        console.log('handler', value, page)
        if(value > page && value * itemsPerPage < endIndex)
            pageActions.setCurrentPage(dispatch, value)
        else if (value * itemsPerPage >= startIndex)
            pageActions.setCurrentPage(dispatch, value)

    }

    const sections = ["All", "Suggested Revisions", "Popular Mistakes", "Unchartered Territory"];

    return (
        <div>
            <AppBar />
            <WordPagination handleMovePage={handleMovePage} page={page} />
            <Grid container>
                { false &&
                    <Fragment>
                        <Grid item xs={10}>
                            <Typography variant="h3" component="h3" align="center">
                                {openedSection}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl className={classes.formControl}>
                                <Select
                                    value={openedSection}
                                    onChange={handleSectionChange}
                                    autoWidth={true}
                                >
                                    {
                                        sections.map(section =>
                                            <MenuItem key={section} value={section}>{section}</MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    
                    </Fragment>
                }
            </Grid>
            {
                cardsData &&
                <CardList
                    title={openedSection}
                    cardsData={cardsData}
                    openSection={openSection}
                />
            }
            <WordPagination handleMovePage={handleMovePage} page={page} />
            <AuthModal />
        </div>
    )
}

export default Learn;