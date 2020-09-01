import React, { Component, useEffect } from 'react'

import city from '../../LocalDb/ERAcity.json';
import luoghi from '../../LocalDb/ERAluoghi.json';

import AlertDialog from "./Components/MarkerInfo";
import Map from "./Components/Map";


const MapPage = (props) => {

  //Detect change of country
  useEffect(() => {
    if (props.location.state){
      setState({
        lat: city[props.location.state.countryId].lat,
        lng: city[props.location.state.countryId].long,
        zoom: 11,
      });
    }
  }, [props.location.state]);

  // Dialog state
  const [openDialog, setOpenDialog] = React.useState(false);

  //Map state
  const [state, setState] = React.useState({
    lat: 47.79941,
    lng: 13.04399,
    zoom: 6,
  });


  return (
    <div>
      <AlertDialog
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
      ></AlertDialog>

      <Map
        setOpenDialog={setOpenDialog}  
        state={state} 
      />

    </div>
  );
}

export default MapPage;
