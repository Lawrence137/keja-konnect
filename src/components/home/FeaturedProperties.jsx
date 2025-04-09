import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Add image optimization constants
const IMAGE_QUALITY = 80;
const BLUR_DATA = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJyEkMz08Pzc3NDQ0HWRXZDRLVWk3OGdYXWVfOjJqb2xkZmRkXWdtYWf/2wBDARUXFx4aHR4eHWRnZGdkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

// Featured properties data
const featuredProperties = [
  {
    id: 1,
    title: 'Modern Studio Apartment',
    location: 'Lower Kabete, Near Junction',
    price: 15000,
    type: 'studio',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    rating: 4.5,
    amenities: ['Wifi', 'Kitchen', 'Parking'],
    beds: 1,
    baths: 1,
    sqft: 450,
    isNew: true,
  },
  {
    id: 2,
    title: 'Spacious 2 Bedroom House',
    location: 'Lower Kabete, Near Market',
    price: 25000,
    type: '2bed',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    rating: 4.8,
    amenities: ['Garden', 'Security', 'Parking'],
    beds: 2,
    baths: 2,
    sqft: 1200,
    isNew: false,
  },
  {
    id: 3,
    title: 'Luxury AirBnB Villa',
    location: 'Lower Kabete, Riverside',
    price: 35000,
    type: 'villa',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    rating: 4.9,
    amenities: ['Pool', 'Gym', 'Security'],
    beds: 4,
    baths: 3,
    sqft: 2500,
    isNew: true,
  },
  {
    id: 4,
    title: 'Executive AirBnB Suite',
    location: 'Lower Kabete, Business District',
    price: 28000,
    type: 'suite',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    rating: 4.7,
    amenities: ['Workspace', 'Gym', 'Parking'],
    beds: 2,
    baths: 2,
    sqft: 1000,
    isNew: false,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
            <p className="text-gray-600">Discover our hand-picked premium properties</p>
          </div>
          <Link 
            to="/listings" 
            className="inline-flex items-center mt-4 sm:mt-0 text-indigo-600 font-medium hover:text-indigo-800 group"
          >
            View All Properties
            <svg 
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProperties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 will-change-transform"
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
                      src={`${property.image}?w=600&q=${IMAGE_QUALITY}`}
                      alt={property.title} 
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                    <span className="text-gray-800 font-semibold">
                      KES {property.price.toLocaleString()}
                    </span>
                  </div>

                  {/* New Tag */}
                  {property.isNew && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                      New
                    </div>
                  )}
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

                  {/* Property Details */}
                  <div className="flex items-center justify-between py-3 border-t border-gray-100">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-sm">{property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="text-sm">{property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span className="text-sm">{property.sqft} sqft</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {property.amenities.map((amenity, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 