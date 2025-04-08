import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { HomeIcon, MapPinIcon, BuildingOfficeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Custom hook for optimized scroll reveal
const useScrollReveal = (threshold = 0.1) => {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    // Return no-op animation if user prefers reduced motion
    return {
      initial: {},
      animate: {},
      transition: {},
      viewport: { once: true }
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: true, amount: threshold }
  };
};

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
  
  // Smooth scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Get scroll reveal animation config
  const scrollReveal = useScrollReveal();

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
      {/* Smooth scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
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
                <span className="px-4 py-2 rounded-full bg-indigo-600/20 text-indigo-400 text-sm font-medium mb-4 inline-block">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Living Space</span>
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
                    className="md:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
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

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8"
            {...scrollReveal}
          >
            <h2 className="text-3xl font-bold mb-2 sm:mb-0">Featured Properties</h2>
            <Link to="/listings" className="text-indigo-600 font-medium hover:text-indigo-800">
              View All
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow will-change-transform"
                style={{
                  contain: 'content',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                <div className="relative h-48">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
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
          </motion.div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            {...scrollReveal}
          >
            Browse by Category
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Category cards with optimized animations */}
            <motion.div variants={itemVariants} className="will-change-transform" style={{ contain: 'content' }}>
              <Link to="/listings?category=airbnb" className="group block">
                <div className="bg-[#FF385C] rounded-2xl p-12 text-center text-white transition-transform group-hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AirBnB Rentals</h3>
                  <p className="text-white/80">Find short-term rentals with all amenities included</p>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-sm font-medium">
                      Browse AirBnB
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="will-change-transform" style={{ contain: 'content' }}>
              <Link to="/listings?category=agent" className="group block">
                <div className="bg-indigo-600 rounded-2xl p-12 text-center text-white transition-transform group-hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Agent Managed</h3>
                  <p className="text-white/80">Properties managed by professional real estate agents</p>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-sm font-medium">
                      Browse Agent Properties
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="will-change-transform" style={{ contain: 'content' }}>
              <Link to="/listings?category=landlord" className="group block">
                <div className="bg-emerald-600 rounded-2xl p-12 text-center text-white transition-transform group-hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Direct from Landlord</h3>
                  <p className="text-white/80">Rent directly from property owners without intermediaries</p>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-sm font-medium">
                      Browse Direct Rentals
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          {...scrollReveal}
        >
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
        </motion.div>
      </section>
    </div>
  );
} 