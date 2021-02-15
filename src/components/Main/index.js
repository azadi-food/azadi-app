import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, withRouter, Redirect } from 'react-router-dom';
import { withGoogleMap, withScriptjs } from '@react-google-maps/api';

import locationsData from '../../data.json';
import { Map } from '../Map';
import { SideList } from '../SideList';

import { useStyles } from './styles.js';


export const Main =  (props) => {
  // const [auth, setAuth] = React.useState(props.auth.username); 
  // useEffect(() => {
  //  Do STUFF ON INITIAL RENDER
  // })
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <SideList locations={locationsData}/>
      <Map locations={locationsData}/>
    </main>
  );
};


