import Cartoon from './TabPanels/Cartoon';
import Video from './TabPanels/Video';
import Usage from './TabPanels/Usage';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import TvIcon from '@material-ui/icons/Tv';
import MovieIcon from '@material-ui/icons/Movie';
import TextFieldsIcon from '@material-ui/icons/TextFields';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 550,
    minHeight: 350,
    margin: 8,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ExternalTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { word, cartoon, tvLinks, movieLinks, sentences, mnemonic } = props;
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
        {console.log(sentences)}
        { sentences && <Tab icon={<TextFieldsIcon />} aria-label="sentence"/>}
        { cartoon && <Tab icon={<InsertEmoticonIcon />} aria-label="cartoon"/> }
        { ( movieLinks && movieLinks.length > 0 ) && <Tab icon={<MovieIcon />} aria-label="movie"/> }
        { ( tvLinks && tvLinks.length > 0 ) && <Tab icon={<TvIcon />} aria-label="tv"/> }
      </Tabs>
      { value === 0 && <Usage sentences={sentences} mnemonic={mnemonic} word={word}/> }
      { value === 1 && <Cartoon cartoon={cartoon} word={word}/> }
      { value === 2 && <Video videos={movieLinks} word={word}/> }
      { value === 3 && <Video videos={tvLinks} word={word}/> }
       
    </Paper>
  );
}