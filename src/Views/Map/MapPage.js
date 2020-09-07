import React, { Component, useEffect } from 'react'

import data from '../../LocalDb/data.json'

import AlertDialog from "./Components/MarkerInfo";
import Map from "./Components/Map";


const MapPage = (props) => {
  // Global variables
  let currCountry = null;
  let dataCountry = null;

  //Detect change of country
  useEffect(() => {
    // Check if component prop 'state' exists (error handler)
    if (props.location.state){
      currCountry = props.location.state.countryId;       // The coutry id ("it" | "de" | "cz")
      dataCountry = data[currCountry];                    // Country data
      setMapState({
        map: dataCountry.map,
        markers: generateMarkersData(),
      });
    }
  }, [props.location.state]);

  // Dialog state
  const openDialog = (id) => {
    setDialogState({
      open: true,
      id: id,
      data: data[props.location.state.countryId].sights[id].infos,
    })
  }
  
  const closeDialog = () => {
    setDialogState(prevState => {
      return {...prevState, open: false}
    });
  }

  const changeDialog = (jump) => {
    const currId = dialogState.id;
    const numIds = data[props.location.state.countryId].sights.length;
    //Find correct new id
    let newId = (currId + jump) % numIds; 
    if(newId == -1){ newId = 11};
    openDialog(newId);        //Update dialog
  }

  const [dialogState, setDialogState] = React.useState({
    open: false,
    id: null,
    data: null
  });

  // Map state
  const generateMarkersData = () => {
    return dataCountry.sights.map((item) => item.marker);
  }

  const [mapState, setMapState] = React.useState({
    map: {
      lat: 47.79941,
      lng: 13.04399,
      zoom: 6,
    },
    markers: [],
  });

  return (
    <div>
      <AlertDialog
        setDialogState={setDialogState}
        dialogState={dialogState}
        closeDialog={closeDialog}
        changeDialog={changeDialog}
      ></AlertDialog>

      <Map
        markersState={mapState.markers}
        mapState={mapState.map}
        openDialog={openDialog}
      />

    </div>
  );
}

export default MapPage;
