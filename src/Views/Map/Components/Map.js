// @flow

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

import luoghi from '../../../LocalDb/ERAluoghi.json';

const MapCmp = (props) => {
  
  const handleClick = event => {
    props.setOpenDialog(true);
  }

  const Markers = luoghi.map((data) => {
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
    <Map center={[props.state.lat, props.state.lng]} zoom={props.state.zoom}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {Markers}
        {polylineLuoghi()}
        {/* {console.log(props)} */}
    </Map>
  );
}

export default MapCmp;
