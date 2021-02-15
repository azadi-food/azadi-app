/* global google */
import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export function Map() {
  // const [progress, updateProgress] = useState(0);
  // const [interval, setInterval] = useState();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB_NC3RTlIGZ7XHIO79VdPXs_MPyTcFUbg',
  });

  const containerStyle = {
    width: '100%',
    height: '400px',
  };
  
  const center = {
    lat: 31.9,
    lng: 35.96,
  };

  const options = {
    zoomControlOptions: {
      // eslint-disable-next-line no-undef
      position: window.google?.maps?.ControlPosition.RIGHT_CENTER, // 'right-center' ,
      // ...otherOptions
    },
  };

  const onLoad = useCallback(
    function onLoad (mapInstance) {
      // do something with map Instance
    },
  );

  const renderMap = () => {
    {/* <MapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px`, width: '500px' }} />}
      mapElement={<div style={{ height: `100%` }} />}
    /> */}
    return <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      options={options}
      onLoad={onLoad}>
      <Marker position={{
        lat: 31.9,
        lng: 35.96,
      }} />
    </GoogleMap>;
  };
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : null;

}