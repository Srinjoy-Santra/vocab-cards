import { cardsData } from '../../redux/testData';

import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, Fragment } from 'react';
import AppBar from '../components/AppBar';
import CardList from '../components/learn/CardList';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
})


const Learn = () => {

    const classes = useStyles();
    const sections = [
        {
            name: "Suggested Revisions",
            data: cardsData,
        },
        {
            name: "Popular Mistakes",
            data: cardsData,
        },
        {
            name: "Unchartered Territory",
            data: cardsData,
        },
    ];
    const [openedSection, openSection] = useState(null);

    return (
        <div>
            <AppBar />
            <FormControl className={classes.formControl}>
                <Select
                    native
                    value={openedSection}
                    onChange={event =>openSection(event.target.value===''?null:event.target.value)}
                    inputProps={{
                        name: 'Section',
                        id: 'section-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {
                        sections.map(section => 
                            <option value={section.name}>{section.name}</option>
                        )
                    }
                </Select>
            </FormControl>
            {
                sections
                    .filter(section => openedSection === null || section.name === openedSection)
                    .map(section =>
                        <CardList
                            title={section.name}
                            cardsData={section.data}
                            openSection={openSection}
                            openedSection={openedSection}
                        />
                    )
            }
        </div>
    )
}

export default Learn;