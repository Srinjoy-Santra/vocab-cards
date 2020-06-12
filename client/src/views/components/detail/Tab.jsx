import Cartoon from './TabPanels/Cartoon';
import Video from './TabPanels/Video';

import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import TvIcon from '@material-ui/icons/Tv';
import MovieIcon from '@material-ui/icons/Movie';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ExternalTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { word, cartoon, tvLinks, movieLinks } = props;
  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        { cartoon && <Tab icon={<InsertEmoticonIcon />} aria-label="cartoon"/> }
        { ( movieLinks && movieLinks.length > 0 ) && <Tab icon={<MovieIcon />} aria-label="movie"/> }
        { ( tvLinks && tvLinks.length > 0 ) && <Tab icon={<TvIcon />} aria-label="tv"/> }
      </Tabs>
      { value === 0 && <Cartoon cartoon={cartoon} word={word}/> }
      { value === 1 && <Video videos={movieLinks} word={word}/> }
      { value === 2 && <Video videos={tvLinks} word={word}/> }
       
    </Paper>
  );
}