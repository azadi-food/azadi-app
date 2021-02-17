import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export function Map(props) {
  // const [progress, updateProgress] = useState(0);
  // const [interval, setInterval] = useState();
  const [list, updateList] = useState(props.locations);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB_NC3RTlIGZ7XHIO79VdPXs_MPyTcFUbg',
  });

  const containerStyle = {
    
  };
  
  const center = {
    lat: 22.301713044714862,
    lng: 114.17268352415587,
  };

  const renderMarkers = (arr) => {
    return arr.map((location, idx) => {
      if(location.Latitude && location.Longitude) {
        return <Marker 
          key={idx}
          position={{
            lat: parseFloat(location.Latitude),
            lng: parseFloat(location.Longitude),
          }} />;
      }
    });
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
  useEffect(() => {
    console.log('rendering map useefft', props.locations, list);
    updateList(props.locations);
  }, [props.locations]);

  const renderMap = () => {

    return <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      options={options}
      onLoad={onLoad}>  
      { renderMarkers(list) }
    </GoogleMap>;
  };
  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : null;

}