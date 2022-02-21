import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker
} from '@react-google-maps/api';
import mapStyle from '../lib/mapStyle';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};
const center = {
  lat: 33.684566,
  lng: -117.826508
};
const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const [markers, setMarkers] = React.useState([]);

  if (loadError) return 'Error loading map';
  if (!isLoaded) return 'Loading Maps';

  return <div>
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={12}
    center={center}
    options={options}
    onClick={event => {
      setMarkers(current => [...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          locationId: 0
        }
      ]);
    }}
    >
      {markers.map(marker => (
      <Marker key={marker.locationId} position={{ lat: marker.lat, lng: marker.lng }}/>
      ))}
    </GoogleMap>
  </div>;
}
