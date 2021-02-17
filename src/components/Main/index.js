import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, withRouter, Redirect } from 'react-router-dom';
import { withGoogleMap, withScriptjs } from '@react-google-maps/api';

import locationsData from '../../data.json';
import { Map } from '../Map';
import { SideList } from '../SideList';

import { useStyles } from './styles.js';


export const Main =  (props) => {
  // const [auth, setAuth] = React.useState(props.auth.username); 
  const [locations, updateLocations] = useState(locationsData); 
  const [filteredLocations, updateFiltered] = useState([]);
  const classes = useStyles();

  const updateMap = (list) => {
    console.log('updating map');
    updateFiltered(list);
  };

  const resetMap = () => {
    updateFiltered(locationsData);
    console.log('resetting map');
  };

  useEffect(() => {
    console.log('rendering main useeffect', locations,' and filtred as: ', filteredLocations);
  }, [locations, filteredLocations]);

  return (
    <main className={classes.root}>
      <SideList locations={locations} updateMap={updateMap} resetMap={resetMap}/>
      <Map locations={filteredLocations.length > 0 ? filteredLocations : locations}/>
    </main>
  );
};


