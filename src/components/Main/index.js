import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, withRouter, Redirect } from 'react-router-dom';
import { withGoogleMap, withScriptjs } from 'react-google-maps';

import Map from './map.js';
import { useStyles } from './styles.js';

// const Header = (props) => {
// needs a better way to handle conditional auth render

const MapComponent = withScriptjs(withGoogleMap(Map));

export const Main =  (props) => {
  // const [auth, setAuth] = React.useState(props.auth.username); 
  // useEffect(() => {
  //  Do STUFF ON INITIAL RENDER
  // })
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: '500px' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </main>
  );
};


