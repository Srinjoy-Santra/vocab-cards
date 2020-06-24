import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
    text: {
        padding: 4,
        textAlign: "center"
    },
    controls: {
        maxWidth: 346,
        margin: 'auto',
        marginTop: 8,
        marginBottom: 8,
        padding: 'theme.spacing(1)',
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default function WordPagination(props) {
    const classes = useStyles();
    const { startIndex: START, endIndex: END, range: RANGE } = useSelector(state => state.page);
    const matches = useMediaQuery('(max-width:346px)');

    return (
        <div className={classes.controls} >
            <Pagination
                count={Math.ceil((END+1-START)/RANGE)}
                page={props.page+1}
                onChange={props.handleMovePage}
                variant="outlined" color="secondary"
                size={matches?"small":'medium'}
                siblingCount={matches?0:1}
                 />
        </div>
    );
}