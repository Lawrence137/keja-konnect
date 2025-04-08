import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Lower Kabete coordinates
const center = {
  lat: -1.1833,
  lng: 36.7333,
};

// Mock property data with coordinates
const properties = [
  {
    id: 1,
    title: 'Modern Studio Apartment',
    location: 'Lower Kabete, Near Junction',
    price: 15000,
    type: 'studio',
    position: { lat: -1.1833, lng: 36.7333 },
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
  },
  {
    id: 2,
    title: 'Spacious 2 Bedroom House',
    location: 'Lower Kabete, Near Market',
    price: 25000,
    type: '2bed',
    position: { lat: -1.1843, lng: 36.7343 },
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
  },
];

// Custom component to handle user location
function UserLocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          map.setView([latitude, longitude], map.getZoom());
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, [map]);

  return position ? (
    <Marker
      position={position}
      icon={L.divIcon({
        className: 'user-location-marker',
        html: '<div style="background-color: #4F46E5; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #4F46E5;"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })}
    >
      <Popup>Your location</Popup>
    </Marker>
  ) : null;
}

export default function Map() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleGetDirections = (property) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Open directions in a new tab using OpenStreetMap routing
          const directionsUrl = `https://www.openstreetmap.org/directions?from=${latitude},${longitude}&to=${property.position.lat},${property.position.lng}`;
          window.open(directionsUrl, '_blank');
        },
        (error) => {
          console.error('Error getting location:', error);
          // If we can't get the user's location, just open the destination
          const directionsUrl = `https://www.openstreetmap.org/?mlat=${property.position.lat}&mlon=${property.position.lng}&zoom=15`;
          window.open(directionsUrl, '_blank');
        }
      );
    } else {
      // If geolocation is not supported, just open the destination
      const directionsUrl = `https://www.openstreetmap.org/?mlat=${property.position.lat}&mlon=${property.position.lng}&zoom=15`;
      window.open(directionsUrl, '_blank');
    }
  };

  return (
    <div className="w-full h-[calc(100vh-6rem)]">
      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
          className="z-10"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <UserLocationMarker />
          
          {properties.map((property) => (
            <Marker
              key={property.id}
              position={[property.position.lat, property.position.lng]}
              eventHandlers={{
                click: () => setSelectedProperty(property),
              }}
            >
              <Popup>
                <div className="max-w-xs p-2">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-32 w-full rounded-lg object-cover"
                  />
                  <h3 className="mt-2 text-lg font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="mt-1 text-base font-medium text-gray-900">
                    KES {property.price.toLocaleString()}/month
                  </p>
                  <button
                    className="mt-2 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    onClick={() => handleGetDirections(property)}
                  >
                    Get Directions
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
} 