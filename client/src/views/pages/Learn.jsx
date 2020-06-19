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

//import { cardsData } from '../../redux/testData';
import { sectionActions } from "../../redux/section/";
import { learnActions } from "../../redux/learn/";
import PAGE_CONSTANTS from "../../utils/pagination";
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
    const page = useSelector(state => state.section.page);

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

    const { START, END, RANGE } = PAGE_CONSTANTS;
    const handleMovePage = (isNext) => {

        if (isNext && (page + 1) * RANGE < END) {
            sectionActions.setPage(dispatch, page + 1)
        }
        else if ((page - 1) * RANGE >= START) {
            sectionActions.setPage(dispatch, page - 1)
        }

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