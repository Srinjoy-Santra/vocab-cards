import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { learnActions } from "../../../redux/learn";
import { alertActions } from "../../../redux/alert";

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }
}));

const SearchAutocomplete = (props) => {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await learnActions.wordsInstance.get('/api/items');
      try{
      setData(result.data.map(item => (
        {"title": item.word, "id":item._id}
      )));
      }
      catch(err){
        console.log(err);
      }
    })()
  }, [])

  return (
    <Autocomplete
      id="search-autocomplete"
      options={data}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) =>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            ref={params.InputProps.ref}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search', ...params.inputProps } }
            onSelect={(event)=>{
              let value = event.target.value;
              let isWordInDB = data.map(item => item.title).includes(value);
              if(value && isWordInDB){
                if(props.auth) history.push(`/learn/${value.toLowerCase()}`);
                else alertActions.setAlert(dispatch, {
                  msg: {
                    msg: "Login to avail search"
                  },
                  status: 0,
                  id: 'Search-Disabled',
                  severity: 'info'
                })
              }
                
            }}
          />
        </div>
      }
    />
  );
}

export default SearchAutocomplete

/* Issues 
  https://github.com/mui-org/material-ui/issues/18334
*/