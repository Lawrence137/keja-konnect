import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Property types for filtering
  const propertyTypes = [
    { id: 'all', name: 'All Properties' },
    { id: 'studio', name: 'Studio' },
    { id: '1bed', name: '1 Bedroom' },
    { id: '2bed', name: '2 Bedroom' },
    { id: '3bed', name: '3 Bedroom' },
    { id: 'villa', name: 'Villa' },
  ];

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gray-900">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" 
            alt="Luxury Home" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/90"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="h-full flex flex-col justify-center max-w-6xl mx-auto pt-20 pb-16">
          {/* Main Content */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-green-600/50 text-green-400 text-sm font-medium mb-4 inline-block">
                Find Your Dream Home Today
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Discover Your Perfect
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-500"> Living Space</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Explore premium rental properties in Lower Kabete, Wangige, and Kingeero. 
              From cozy studios to luxurious villas, find the perfect place to call home.
            </motion.p>
          </div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto w-full"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by location or property name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div className="md:w-48">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
                  >
                    {propertyTypes.map(type => (
                      <option key={type.id} value={type.id} className="text-gray-900">
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <Link 
                  to="/listings" 
                  className="md:w-auto px-8 py-4 bg-gradient-to-r from-green-600 to-green-900 hover:from-green-400 hover:to-green-500 text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                  <span>Search</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { label: 'Properties', value: '200+' },
              { label: 'Locations', value: '3' },
              { label: 'Happy Tenants', value: '1000+' },
              { label: 'Property Types', value: '6' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
    </section>
  );
} 