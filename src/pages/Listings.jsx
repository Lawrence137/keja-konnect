import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Listings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [sortBy, setSortBy] = useState('price-asc');
  const [isLoading, setIsLoading] = useState(true);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', selectedCategory);
    }
    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);

  // Handle initial category from URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // All properties data (in a real app, this would come from an API)
  const allProperties = [
    {
      id: 1,
      title: 'Modern Studio Apartment',
      location: 'Lower Kabete, Near Junction',
      price: 15000,
      type: 'studio',
      category: 'airbnb',
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
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      agent: 'Home Finder Kenya',
      contact: '+254700000005',
    },
    {
      id: 9,
      title: 'Wangige Market Apartment',
      location: 'Wangige, Near Market',
      price: 16000,
      type: '1bed',
      category: 'landlord',
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
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
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
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      agent: 'Wangige Realtors',
      contact: '+254700000008',
    },
    {
      id: 13,
      title: 'Kingeero Garden Homes',
      location: 'Kingeero, Off Main Road',
      price: 18000,
      type: '1bed',
      category: 'landlord',
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
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      landlord: 'Peter Njoroge',
      contact: '+254700000010',
    }
  ];

  // Property types for filtering
  const propertyTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'studio', name: 'Studio' },
    { id: '1bed', name: '1 Bedroom' },
    { id: '2bed', name: '2 Bedroom' },
    { id: '3bed', name: '3 Bedroom' },
    { id: '4bed', name: '4 Bedroom' },
    { id: 'villa', name: 'Villa' },
    { id: 'suite', name: 'Suite' },
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'airbnb', name: 'AirBnB' },
    { id: 'agent', name: 'Agent Managed' },
    { id: 'landlord', name: 'Direct from Landlord' },
  ];

  // Sort options
  const sortOptions = [
    { id: 'price-asc', name: 'Price: Low to High' },
    { id: 'price-desc', name: 'Price: High to Low' },
    { id: 'rating-desc', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest First' },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort properties
  const filteredProperties = allProperties
    .filter(property => {
      // Filter by search query
      const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by property type
      const matchesType = selectedType === 'all' || property.type === selectedType;
      
      // Filter by category
      const matchesCategory = selectedCategory === 'all' || property.category === selectedCategory;
      
      // Filter by price range
      const matchesPrice = property.price >= priceRange.min && property.price <= priceRange.max;
      
      return matchesSearch && matchesType && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      // Sort properties
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-desc':
          // For properties without rating, use a default value
          const ratingA = a.rating || 0;
          const ratingB = b.rating || 0;
          return ratingB - ratingA;
        case 'newest':
          // In a real app, this would use a date field
          return b.id - a.id;
        default:
          return 0;
      }
    });

  // Handle price range change
  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => ({ ...prev, max: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Browse Properties</h1>
        
        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                placeholder="Search by location or property name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {propertyTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range: Up to KES {priceRange.max.toLocaleString()}
            </label>
            <input
              type="range"
              min="0"
              max="100000"
              step="5000"
              value={priceRange.max}
              onChange={handlePriceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>KES 0</span>
              <span>KES 100,000</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {filteredProperties.length} of {allProperties.length} properties
            </p>
            <Link 
              to="/map" 
              className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              View on Map
            </Link>
          </div>
        </div>
        
        {/* Properties Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link to={`/property/${property.id}`} className="block">
                  <div className="relative h-48">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-medium">
                      KES {property.price.toLocaleString()}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium text-white ${
                        property.category === 'airbnb' ? 'bg-[#FF385C]' : 
                        property.category === 'agent' ? 'bg-indigo-600' : 
                        'bg-emerald-600'
                      }`}>
                        {property.category === 'airbnb' ? 'AirBnB' : 
                         property.category === 'agent' ? 'Agent' : 
                         'Landlord'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        {property.rating && (
                          <>
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm">{property.rating}</span>
                          </>
                        )}
                      </div>
                      
                      <span className="text-sm font-medium text-gray-500">
                        {property.type === 'studio' ? 'Studio' : 
                         property.type === '1bed' ? '1 Bed' : 
                         property.type === '2bed' ? '2 Beds' : 
                         property.type === '3bed' ? '3 Beds' : 
                         property.type === '4bed' ? '4 Beds' : 
                         property.type === 'villa' ? 'Villa' : 
                         property.type === 'suite' ? 'Suite' : property.type}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="px-4 pb-4 flex justify-between items-center">
                  <Link 
                    to={`/property/${property.id}`} 
                    className="text-indigo-600 text-sm font-medium hover:text-indigo-800 flex items-center"
                  >
                    <span>View Details</span>
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
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No properties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to find more properties</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setSelectedCategory('all');
                setPriceRange({ min: 0, max: 100000 });
              }}
              className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 