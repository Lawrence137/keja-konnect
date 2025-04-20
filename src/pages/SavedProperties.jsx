import React from 'react';
import { useSavedProperties } from '../context/SavedPropertiesContext';
import PropertyCard from '../components/PropertyCard';

function SavedProperties() {
  const { savedProperties } = useSavedProperties();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Saved Properties</h1>
      {savedProperties.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">You haven't saved any properties yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedProperties; 