import React from 'react';
import { Link } from 'react-router-dom';
import { useSavedProperties } from '../context/SavedPropertiesContext';

function PropertyCard({ property }) {
  const { isPropertySaved, toggleSaveProperty } = useSavedProperties();
  const isSaved = isPropertySaved(property.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          ${property.price.toLocaleString()}
        </p>
        <div className="flex justify-between items-center">
          <Link
            to={`/property/${property.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Details
          </Link>
          <button
            onClick={() => toggleSaveProperty(property)}
            className={`p-2 rounded-full ${
              isSaved
                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {isSaved ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard; 