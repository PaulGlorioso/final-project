import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
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

let counter = 1;

export default function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  const [markers, setMarkers] = React.useState(props.markers);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback(event => {
    setMarkers(current => [...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        locationId: counter++
      }
    ]);
  }, []);

  if (loadError) return 'Error loading map';
  if (!isLoaded) return 'Loading Maps';

  return <div>
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={12}
    center={center}
    options={options}
    onClick={onMapClick}
    >
      {markers.map(marker =>
      <Marker
      key={marker.locationId}
      position={{ lat: marker.lat, lng: marker.lng }}
      onClick={ () => {
        setSelected(marker);
      }}
      />
      )}

      {selected
        ? (<InfoWindow
          position={{ lat: (selected.lat + 0.01), lng: selected.lng }}
          onCloseClick={() => {
            setSelected(null);
          }}
          >
        <div>
          <a href={`#form?lat=${selected.lat}&lng=${selected.lng}`}>Add Marker</a>
        </div>
      </InfoWindow>)
        : null}
    </GoogleMap>
  </div>;
}
