import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, withRouter, Redirect } from 'react-router-dom';

import { useStyles } from './styles.js';

// const Header = (props) => {
// needs a better way to handle conditional auth render
// const [auth, setAuth] = React.useState(props.auth.username); 

// useEffect(() => {
//  Do STUFF ON INITIAL RENDER
// })

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

export const Header =  (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h5" noWrap>
          Azadi Food
        </Typography>
        <IconButton aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="display more actions" edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};


