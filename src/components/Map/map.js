import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  Polyline,
  Marker,
} from '@react-google-maps/api';

export const Map = (props) => {
  const [progress, updateProgress] = useState(0);
  const [interval, setInterval] = useState();

  const velocity = 100;
  const initialDate = new Date();
  const getDistance = () => {
    // seconds between when the component loaded and now
    const differentInTime = (new Date() - initialDate) / 1000; // pass to seconds
    return differentInTime * velocity; // d = v*t -- thanks Newton!
  };

  let path = [
    { lat: 18.566516, lng: -68.435996 },
    { lat: 18.5644, lng: -68.423036 },
    { lat: 18.563586, lng: -68.418744 },
    { lat: 18.562339, lng: -68.410725 },
    { lat: 18.560927, lng: -68.402459 },
    { lat: 18.559605, lng: -68.394354 },
    { lat: 18.559028, lng: -68.391003 },
    { lat: 18.558841, lng: -68.390594 },
    { lat: 18.558795, lng: -68.390387 },
    { lat: 18.558767, lng: -68.390312 },
    { lat: 18.558744, lng: -68.390256 },
    { lat: 18.558726, lng: -68.390202 },
    { lat: 18.55867, lng: -68.390124 },
    { lat: 18.558663, lng: -68.390111 },
    { lat: 18.558602, lng: -68.389995 },
    { lat: 18.5585, lng: -68.389867 },
    { lat: 18.558462, lng: -68.389837 },
    { lat: 18.558396, lng: -68.389781 },
    { lat: 18.55828, lng: -68.389641 },
    { lat: 18.558234, lng: -68.389557 },
    { lat: 18.558143, lng: -68.389469 },
    { lat: 18.558089, lng: -68.389362 },
    { lat: 18.558062, lng: -68.389265 },
    { lat: 18.558011, lng: -68.389069 },
    { lat: 18.557985, lng: -68.388965 },
    { lat: 18.557988, lng: -68.38879 },
    { lat: 18.558032, lng: -68.388603 },
    { lat: 18.55806, lng: -68.388525 },
    { lat: 18.558113, lng: -68.388425 },
    { lat: 18.558192, lng: -68.388297 },
    { lat: 18.558301, lng: -68.388181 },
    { lat: 18.558497, lng: -68.388045 },
    { lat: 18.558571, lng: -68.388002 },
    { lat: 18.558701, lng: -68.387927 },
    { lat: 18.558863, lng: -68.387895 },
    { lat: 18.559046, lng: -68.387887 },
    { lat: 18.559308, lng: -68.387922 },
    { lat: 18.559677, lng: -68.388185 },
    { lat: 18.559824, lng: -68.388314 },
    { lat: 18.559929, lng: -68.388397 },
    { lat: 18.560018, lng: -68.388512 },
    { lat: 18.560203, lng: -68.388607 },
    { lat: 18.560472, lng: -68.388615 },
    { lat: 18.560655, lng: -68.388613 },
    { lat: 18.560957, lng: -68.388572 },
    { lat: 18.561206, lng: -68.388521 },
  ];

  useEffect(() => {
    path = path.map((coordinates, i, array) => {
      if (i === 0) {
        return { ...coordinates, distance: 0 }; // it begins here!
      }
      const { lat: lat1, lng: lng1 } = coordinates;
      const latLong1 = new window.google.maps.LatLng(lat1, lng1);

      const { lat: lat2, lng: lng2 } = array[0];
      const latLong2 = new window.google.maps.LatLng(lat2, lng2);

      // in meters:
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
        latLong1,
        latLong2,
      );

      return { ...coordinates, distance };
    });

    console.log(path);
    setInterval(window.setInterval(moveObject, 1000));
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const moveObject = () => {
    const distance = getDistance();
    if (!distance) {
      return;
    }

    let varProgress = path.filter(coordinates => coordinates.distance < distance);

    const nextLine = path.find(coordinates => coordinates.distance > distance);
    if (!nextLine) {
      updateProgress({ varProgress });
      return; // it's the end!
    }
    const lastLine = varProgress[varProgress.length - 1];

    const lastLineLatLng = new window.google.maps.LatLng(
      lastLine.lat,
      lastLine.lng,
    );

    const nextLineLatLng = new window.google.maps.LatLng(
      nextLine.lat,
      nextLine.lng,
    );

    // distance of this line
    const totalDistance = nextLine.distance - lastLine.distance;
    const percentage = (distance - lastLine.distance) / totalDistance;

    const position = window.google.maps.geometry.spherical.interpolate(
      lastLineLatLng,
      nextLineLatLng,
      percentage,
    );

    varProgress = varProgress.concat(position);
    updateProgress({ varProgress });
  };

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 18.559008, lng: -68.388881 }}
    >
      {progress && (
        <>
          <Polyline
            path={progress}
            options={{ strokeColor: '#FF0000 ' }}
          />
          <Marker
            position={progress[progress.length - 1]}
          />
        </>
      )}
    </GoogleMap>
  );
};