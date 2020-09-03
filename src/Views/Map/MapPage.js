import React, { Component, useEffect } from 'react'

import city from '../../LocalDb/ERAcity.json';
import luoghi from '../../LocalDb/ERAluoghi.json';

import AlertDialog from "./Components/MarkerInfo";
import Map from "./Components/Map";


const MapPage = (props) => {

  //Detect change of country
  useEffect(() => {
    if (props.location.state){
      setMapState({
        lat: city[props.location.state.countryId].lat,
        lng: city[props.location.state.countryId].long,
        zoom: 11,
      });
    }
  }, [props.location.state]);

  // Dialog state
  const [dialogState, setDialogState] = React.useState({
    open: false,
    data: null,
  });

  //Map state
  const [mapState, setMapState] = React.useState({
    lat: 47.79941,
    lng: 13.04399,
    zoom: 6,
  });


  return (
    <div>
      <AlertDialog
        setDialogState={setDialogState}
        dialogState={dialogState}
      ></AlertDialog>

      <Map
        setDialogState={setDialogState}  
        mapState={mapState} 
      />

    </div>
  );
}

export default MapPage;
