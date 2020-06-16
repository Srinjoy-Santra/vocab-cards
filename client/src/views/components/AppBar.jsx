import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';

import SearchAutocomplete from "./topbar/SearchAutocomplete";
import ProfileMenu from "./topbar/ProfileMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const auth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon /> 
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {document.title}
          </Typography>
          <SearchAutocomplete auth={auth}/>
          <ProfileMenu auth={auth}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}