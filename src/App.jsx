import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ location }) => {
  return (
    <MapContainer key={`${location[0]}-${location[1]}`} center={location} zoom={13} style={{ height: '80vh', width: '100%', marginTop: '30px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
};

const LocationForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit([parseFloat(latitude), parseFloat(longitude)]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Latitude (X):
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </label>
      <label>
        Longitude (Y):
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const MapPage = () => {
  const [location, setLocation] = useState([60.1695, 24.9354]); 

  const handleFormSubmit = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div>
      <h1>Map Page</h1>
      <LocationForm onSubmit={handleFormSubmit} />
      <MapComponent location={location} />
    </div>
  );
};

export default MapPage;
