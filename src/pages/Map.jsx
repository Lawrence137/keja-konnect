import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
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

// Mock property data with categories - more spread out across the area
const properties = [
  {
    id: 1,
    title: 'Modern Studio Apartment',
    location: 'Lower Kabete, Near Junction',
    price: 15000,
    type: 'studio',
    category: 'airbnb',
    position: { lat: -1.1833, lng: 36.7333 }, // Near Junction
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    rating: 4.5,
    amenities: ['Wifi', 'Kitchen', 'Workspace'],
  },
  {
    id: 2,
    title: 'Spacious 2 Bedroom House',
    location: 'Lower Kabete, Near Market',
    price: 25000,
    type: '2bed',
    category: 'agent',
    position: { lat: -1.1943, lng: 36.7243 }, // More towards the west
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    agent: 'Prime Realtors',
    contact: '+254700000001',
  },
  {
    id: 3,
    title: 'Cozy 1 Bedroom Apartment',
    location: 'Lower Kabete, Near School',
    price: 18000,
    type: '1bed',
    category: 'landlord',
    position: { lat: -1.1753, lng: 36.7453 }, // More towards the east
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    landlord: 'John Doe',
    contact: '+254700000002',
  },
  {
    id: 4,
    title: 'Luxury AirBnB Villa',
    location: 'Lower Kabete, Riverside',
    price: 35000,
    type: 'villa',
    category: 'airbnb',
    position: { lat: -1.1763, lng: 36.7163 }, // More towards the northwest
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    rating: 4.8,
    amenities: ['Pool', 'Wifi', 'Kitchen', 'Parking'],
  },
  {
    id: 5,
    title: 'Modern 3 Bedroom Apartment',
    location: 'Lower Kabete, Near Mall',
    price: 45000,
    type: '3bed',
    category: 'agent',
    position: { lat: -1.1923, lng: 36.7523 }, // More towards the southeast
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    agent: 'Elite Properties',
    contact: '+254700000003',
  },
  {
    id: 6,
    title: 'Charming Studio with Garden',
    location: 'Lower Kabete, Green Zone',
    price: 20000,
    type: 'studio',
    category: 'landlord',
    position: { lat: -1.1693, lng: 36.7293 }, // More towards the north
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    landlord: 'Jane Smith',
    contact: '+254700000004',
  },
  {
    id: 7,
    title: 'Executive AirBnB Suite',
    location: 'Lower Kabete, Business District',
    price: 28000,
    type: 'suite',
    category: 'airbnb',
    position: { lat: -1.1883, lng: 36.7423 }, // More towards the east
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    rating: 4.9,
    amenities: ['Wifi', 'Kitchen', 'Workspace', 'Gym', 'Pool'],
  },
  {
    id: 8,
    title: 'Family Home with Garden',
    location: 'Lower Kabete, Residential Area',
    price: 55000,
    type: '4bed',
    category: 'agent',
    position: { lat: -1.1803, lng: 36.7193 }, // More towards the west
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    agent: 'Home Finder Kenya',
    contact: '+254700000005',
  },
  {
    id: 9,
    title: 'Karura Town Apartment',
    location: 'Karura, Near Market',
    price: 16000,
    type: '1bed',
    category: 'landlord',
    position: { lat: -1.2123, lng: 36.7253 }, // Wangige area
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    landlord: 'Mary Wanjiku',
    contact: '+254700000006',
  },
  {
    id: 10,
    title: 'Kingeero Heights',
    location: 'Kingeero Center',
    price: 22000,
    type: '2bed',
    category: 'agent',
    position: { lat: -1.2033, lng: 36.7153 }, // Kingeero area
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    agent: 'Kingeero Properties',
    contact: '+254700000007',
  },
  {
    id: 11,
    title: 'Lower Kabete Road Villa',
    location: 'Lower Kabete Road, Near USIU',
    price: 42000,
    type: '3bed',
    category: 'airbnb',
    position: { lat: -1.1893, lng: 36.7473 }, // Along Lower Kabete Road
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    rating: 4.7,
    amenities: ['Pool', 'Wifi', 'Kitchen', 'Garden', 'Parking'],
  },
  {
    id: 12,
    title: 'Wangige Shopping Plaza Apartment',
    location: 'Wangige, Near KCB',
    price: 25000,
    type: '2bed',
    category: 'agent',
    position: { lat: -1.2143, lng: 36.7273 }, // Wangige shopping area
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    agent: 'Wangige Realtors',
    contact: '+254700000008',
  },
  {
    id: 13,
    title: 'Kabete Garden Homes',
    location: 'Kabete, Off Main Road',
    price: 18000,
    type: '1bed',
    category: 'landlord',
    position: { lat: -1.2353536, lng: 36.7230976 }, // Kingeero residential area
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    landlord: 'James Kamau',
    contact: '+254700000009',
  },
  {
    id: 14,
    title: 'Lower Kabete Executive Suites',
    location: 'Lower Kabete Road, Near Alliance',
    price: 35000,
    type: '2bed',
    category: 'airbnb',
    position: { lat: -1.1853, lng: 36.7393 }, // Along Lower Kabete Road
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    rating: 4.6,
    amenities: ['Wifi', 'Kitchen', 'Workspace', 'Security', 'Parking'],
  },
  {
    id: 15,
    title: 'Wangige Student Apartment',
    location: 'Wangige, Near St. Pauls',
    price: 12000,
    type: 'studio',
    category: 'landlord',
    position: { lat: -1.2103, lng: 36.7233 }, // Wangige educational area
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    landlord: 'Peter Njoroge',
    contact: '+254700000010',
  }
];

// Custom markers for different categories
const createCustomIcon = (category) => {
  const colors = {
    airbnb: '#FF385C', // AirBnB red
    agent: '#4F46E5', // Indigo
    landlord: '#059669', // Emerald
  };

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: 30px;
        height: 40px;
        position: relative;
      ">
        <svg viewBox="0 0 24 36" style="
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        ">
          <path 
            d="M12 0C5.383 0 0 5.383 0 12c0 9 12 24 12 24s12-15 12-24c0-6.617-5.383-12-12-12zm0 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
            fill="${colors[category]}"
            stroke="white"
            stroke-width="1"
          />
        </svg>
      </div>
    `,
    iconSize: [30, 40],
    iconAnchor: [15, 40], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -40] // Point from which the popup should open relative to the iconAnchor
  });
};

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
        html: `
          <div style="
            width: 16px;
            height: 16px;
            background-color: #4F46E5;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 0 0 2px #4F46E5;
          "></div>
        `,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })}
    >
      <Popup>Your location</Popup>
    </Marker>
  ) : null;
}

export default function Map() {
  const [selectedCategories, setSelectedCategories] = useState({
    airbnb: true,
    agent: true,
    landlord: true,
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Filter properties based on selected categories
  useEffect(() => {
    const filtered = properties.filter(
      (property) => selectedCategories[property.category]
    );
    setFilteredProperties(filtered);
  }, [selectedCategories]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const getDirectionsUrl = (property) => {
    // Google Maps URL with language parameter set to English
    return `https://www.google.com/maps/dir/?api=1&destination=${property.position.lat},${property.position.lng}&hl=en`;
  };

  return (
    <div className="w-full h-[calc(100vh-6rem)] p-4">
      {/* Category Filter */}
      <div className="absolute top-8 right-8 z-10 bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <h3 className="text-lg font-semibold mb-3">Property Types</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedCategories.airbnb}
              onChange={() => toggleCategory('airbnb')}
              className="rounded border-gray-300 text-[#FF385C] focus:ring-[#FF385C]"
            />
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF385C]"></span>
              AirBnB Rentals
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedCategories.agent}
              onChange={() => toggleCategory('agent')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
              Agent Managed
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedCategories.landlord}
              onChange={() => toggleCategory('landlord')}
              className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
              Direct from Landlord
            </span>
          </label>
        </div>
      </div>

      {/* Map Container */}
      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={[-1.1833, 36.7333]}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
          zoomControl={false}
        >
          <ZoomControl position="bottomleft" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <UserLocationMarker />
          
          {filteredProperties.map((property) => (
            <Marker
              key={property.id}
              position={[property.position.lat, property.position.lng]}
              icon={createCustomIcon(property.category)}
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
                  {property.category === 'airbnb' && (
                    <div className="mt-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{property.rating}</span>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {property.amenities.map((amenity, index) => (
                          <span key={index} className="inline-block px-2 py-0.5 text-xs bg-gray-100 rounded">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {(property.category === 'agent' || property.category === 'landlord') && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">
                        {property.category === 'agent' ? `Agent: ${property.agent}` : `Landlord: ${property.landlord}`}
                      </p>
                      <p className="text-sm text-gray-600">
                        Contact: {property.contact}
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => window.open(getDirectionsUrl(property), '_blank')}
                    className="mt-2 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
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