import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSavedProperties } from '../context/SavedPropertiesContext';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJyEkMz08Pzc3NDQ0HWRXZDRLVWk3OGdYXWVfOjJqb2xkZmRkXWdtYWf/2wBDARUXFx4aHR4eHWRnZGdkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

function PropertyCard({ property }) {
  const navigate = useNavigate();
  const { isPropertySaved, toggleSaveProperty, isAuthenticated } = useSavedProperties();
  const isSaved = isPropertySaved(property.id);

  const handleSaveClick = (e) => {
    e.preventDefault(); // Prevent navigating to property details
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    toggleSaveProperty(property);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 will-change-transform"
      style={{
        contain: 'content',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)'
      }}
    >
      <Link to={`/property/${property.id}`} className="block">
        <div className="relative">
          {/* Image with blur-up loading */}
          <div className="relative h-56 overflow-hidden bg-gray-200">
            <div 
              className="absolute inset-0 blur-xl transform scale-110"
              style={{
                backgroundImage: `url(${BLUR_DATA})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <img 
              src={property.imageUrl}
              alt={property.title} 
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          {/* Save Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={handleSaveClick}
              className={`p-2 rounded-full shadow-md transition-all duration-200 ${
                isSaved 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              aria-label={isSaved ? "Remove from saved properties" : "Save property"}
            >
              {isSaved ? (
                <HeartIconSolid className="h-5 w-5" />
              ) : (
                <HeartIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-lg text-sm font-medium text-white ${
              property.category === 'airbnb' ? 'bg-[#FF385C]' : 
              property.category === 'agent' ? 'bg-indigo-600' : 
              'bg-emerald-600'
            }`}>
              {property.category === 'airbnb' ? 'AirBnB' : 
               property.category === 'agent' ? 'Agent' : 
               'Landlord'}
            </span>
          </div>

          {/* Price Tag */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="text-white font-bold text-lg">
              KES {property.price.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
            {property.title}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-4">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Property Type */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">
              {property.type === 'studio' ? 'Studio' : 
               property.type === '1bed' ? '1 Bed' : 
               property.type === '2bed' ? '2 Beds' : 
               property.type === '3bed' ? '3 Beds' : 
               property.type === '4bed' ? '4 Beds' : 
               property.type === 'villa' ? 'Villa' : 
               property.type === 'suite' ? 'Suite' : property.type}
            </span>
            {property.rating && (
              <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">{property.rating}</span>
              </div>
            )}
          </div>

          {/* Amenities */}
          {property.amenities && (
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {amenity}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>

      <div className="px-5 pb-5 flex justify-between items-center border-t border-gray-100 pt-4">
        <Link 
          to={`/property/${property.id}`} 
          className="text-indigo-600 text-sm font-medium hover:text-indigo-800 flex items-center"
        >
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        
        <Link 
          to={`/map?property=${property.id}`} 
          className="text-gray-600 text-sm font-medium hover:text-gray-800 flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          View on Map
        </Link>
      </div>
    </motion.div>
  );
}

export default PropertyCard; 