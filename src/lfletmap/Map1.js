import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import './Map.css';

class MapComponent extends React.Component {
  state = {
    lat: 54.489412,
    lng: 37.060755,
    zoom: 10
  };

  render() {
    var center = [this.state.lat, this.state.lng];

    return (
      <MapContainer zoom={this.state.zoom} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  }
}

export default MapComponent;