import Highlight from './Highlight';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  const { ge, econ, word } = props;

  return (
    <div className={classes.root}>
      {
        ge &&
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} color='secondary'>GRE Edge</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Highlight sentence={ge} checkWord={word}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      }
      {
        econ &&
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading} color='secondary'>The Economist</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Highlight sentence={econ} checkWord={word}/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      }
      
    </div>
  );
}