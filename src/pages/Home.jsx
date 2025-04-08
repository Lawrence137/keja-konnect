import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Find Your Perfect Home',
    description: 'Search through a wide range of properties in Lower Kabete, from studios to 4+ bedroom houses.',
    icon: HomeIcon,
  },
  {
    name: 'Interactive Map',
    description: 'View properties on an interactive map and get directions from your current location.',
    icon: MapPinIcon,
  },
  {
    name: 'Verified Listings',
    description: 'All properties are verified to ensure you get accurate information and photos.',
    icon: BuildingOfficeIcon,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Featured properties for the homepage
  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Studio Apartment',
      location: 'Lower Kabete, Near Junction',
      price: 15000,
      type: 'studio',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Spacious 2 Bedroom House',
      location: 'Lower Kabete, Near Market',
      price: 25000,
      type: '2bed',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Luxury AirBnB Villa',
      location: 'Lower Kabete, Riverside',
      price: 35000,
      type: 'villa',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      rating: 4.9,
    },
    {
      id: 4,
      title: 'Executive AirBnB Suite',
      location: 'Lower Kabete, Business District',
      price: 28000,
      type: 'suite',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      rating: 4.7,
    },
  ];

  // Property types for filtering
  const propertyTypes = [
    { id: 'all', name: 'All Properties' },
    { id: 'studio', name: 'Studio' },
    { id: '1bed', name: '1 Bedroom' },
    { id: '2bed', name: '2 Bedroom' },
    { id: '3bed', name: '3 Bedroom' },
    { id: 'villa', name: 'Villa' },
  ];

  // Filter properties based on search and type
  const filteredProperties = featuredProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || property.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Find Your Perfect Home
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl"
          >
            Discover the best rental properties in Lower Kabete, Wangige, and Kingeero. From cozy studios to luxury villas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <Link 
              to="/map" 
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-center"
            >
              Explore on Map
            </Link>
            <Link 
              to="/listings" 
              className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              View All Listings
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Find Your Next Home</h2>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by location or property name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div className="w-full md:w-48">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {propertyTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                
                <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Link to="/listings" className="text-indigo-600 font-medium hover:text-indigo-800">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-medium">
                    KES {property.price.toLocaleString()}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm">{property.rating}</span>
                    </div>
                    
                    <Link 
                      to={`/property/${property.id}`} 
                      className="text-indigo-600 text-sm font-medium hover:text-indigo-800"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-[#FF385C] flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">AirBnB Rentals</h3>
                <p className="text-gray-600 mb-4">Find short-term rentals with all amenities included</p>
                <Link to="/listings?category=airbnb" className="text-indigo-600 font-medium hover:text-indigo-800">
                  Browse AirBnB
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-indigo-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Agent Managed</h3>
                <p className="text-gray-600 mb-4">Properties managed by professional real estate agents</p>
                <Link to="/listings?category=agent" className="text-indigo-600 font-medium hover:text-indigo-800">
                  Browse Agent Properties
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-emerald-600 flex items-center justify-center">
                <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Direct from Landlord</h3>
                <p className="text-gray-600 mb-4">Rent directly from property owners without intermediaries</p>
                <Link to="/listings?category=landlord" className="text-indigo-600 font-medium hover:text-indigo-800">
                  Browse Direct Rentals
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our map to find the perfect rental property in your desired location.
          </p>
          <Link 
            to="/map" 
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Map
          </Link>
        </div>
      </section>
    </div>
  );
} 