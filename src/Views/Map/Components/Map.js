// @flow

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

const MapCmp = (props) => {
  
  const handleMarkerClick = (event, id) => {
    props.openDialog(id)
  }

  const Markers = props.markersState.map((marker) => {
    return (
      <Marker position={[marker.lat, marker.lng]} onClick={(e) => handleMarkerClick(e, marker.id)}></Marker>
    );
  }
  )

  const generatePolylineData = () => {
    const coords = [];
    props.markersState.map((marker) => {
      coords[marker.id] = [marker.lat, marker.lng];
    })
    return coords;
  }

  return (
    <Map center={[props.mapState.lat, props.mapState.lng]} zoom={props.mapState.zoom}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {Markers}
        <Polyline positions={generatePolylineData()} ></Polyline>
        
    </Map>
  );
}

export default MapCmp;
