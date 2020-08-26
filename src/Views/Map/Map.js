// @flow

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import city from '../../LocalDb/ERAcity.json';
import luoghi from '../../LocalDb/ERAluoghi.json';

import AlertDialog from "./Components/MarkerInfo";


const MapPage = (props) => {

  // Dialog state
  const [openDialog, setOpenDialog] = React.useState(false);

  const [state, setState] = React.useState({
    lat: luoghi[0].lat,
    lng: luoghi[0].long,
    zoom: 11
  });
  
  const handleClick = event => {
    setOpenDialog(true);
    console.log(props.country);
  }

  const dataLuoghi = luoghi.map((data) => {
    return (
      <Marker position={[data.lat, data.long]} onClick={handleClick} ></Marker>
    );
  }
  )

  const polylineLuoghi = () => {
    const coords = [];
    luoghi.map((data) => {
        if(data.codcty === "1"){
            coords[data.ord-1] = [data.lat, data.long];
        }
    });
    return(<Polyline positions={coords} ></Polyline>);
  }


  return (
    <div>
      <AlertDialog setOpenDialog={setOpenDialog} openDialog={openDialog}></AlertDialog>
      <Map center={[state.lat, state.lng]} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {dataLuoghi}
        {polylineLuoghi()}
      </Map>
    </div>

  );
}

export default MapPage;
