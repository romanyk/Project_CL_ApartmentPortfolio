import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './map.css';

const AnyReactComponent = () => {
  return <i className="fas fa-map-marker-alt"></i>
}

class GoogleApiWrapper extends Component {
  state = {
    krk: {
      lat: 50.089001,
      lng: 19.979553
    },
    wro: {
      lat: 51.091599,
      lng: 17.046081
    },
    zoom: 16

  }
  render() {
    const { city } = this.props
    const location = (city === "wro") ? this.state.wro : this.state.krk
    return (

      <div className="maps">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDhVbUxuK9ix-HkqDpypN218lj4W1q8AL0" }}
          defaultCenter={location}
          defaultZoom={this.state.zoom}

        >
          <AnyReactComponent
            lat={location.lat}
            lng={location.lng}
            text={"text"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleApiWrapper;