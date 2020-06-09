import { cardsData } from '../../redux/testData';
import { sectionActions } from "../../redux/section/";

import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../components/AppBar';
import CardList from '../components/learn/CardList';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

    const handleSectionChange = (event) => {
        const sectionName = event.target.value;
        openSection(sectionName);
        sectionActions.setSection(dispatch, sectionName);
    }

    const sections = [ "All", "Suggested Revisions", "Popular Mistakes", "Unchartered Territory" ];

    return (
        <div>
            <AppBar />
            <Grid container>
                <Grid item xs={10}>
                    <Typography variant="h3" component="h3" align="center">
                        { openedSection }
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
            </Grid>
           
            <CardList
                title={openedSection}
                cardsData={cardsData}
                openSection={openSection}
            />

            
        </div>
    )
}

export default Learn;