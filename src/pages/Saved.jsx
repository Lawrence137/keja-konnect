import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

// Mock saved properties data
const savedProperties = [
  {
    id: 1,
    title: 'Modern Studio Apartment',
    location: 'Lower Kabete, Near Junction',
    price: 15000,
    type: 'studio',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    amenities: ['parking', 'security', 'water', 'electricity'],
  },
  {
    id: 2,
    title: 'Spacious 2 Bedroom House',
    location: 'Lower Kabete, Near Market',
    price: 25000,
    type: '2bed',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    amenities: ['parking', 'security', 'water', 'electricity', 'internet'],
  },
];

export default function Saved() {
  const [savedItems, setSavedItems] = useState(savedProperties);

  const removeFromSaved = (id) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Saved Properties</h1>
        </div>

        {savedItems.length === 0 ? (
          <div className="mt-12 text-center">
            <HeartIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No saved properties</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by saving properties you're interested in.
            </p>
            <div className="mt-6">
              <a
                href="/search"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Browse Properties
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {savedItems.map((property) => (
              <div
                key={property.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-96">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {property.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{property.location}</p>
                  <p className="text-base font-medium text-gray-900">KES {property.price.toLocaleString()}/month</p>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => removeFromSaved(property.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 