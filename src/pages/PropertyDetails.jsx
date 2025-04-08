import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Mock property data (in a real app, this would come from an API)
  const allProperties = [
    {
      id: 1,
      title: 'Modern Studio Apartment',
      location: 'Lower Kabete, Near Junction',
      price: 15000,
      type: 'studio',
      category: 'airbnb',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff'
      ],
      rating: 4.5,
      reviews: 24,
      amenities: ['Wifi', 'Kitchen', 'Workspace', 'Air Conditioning', 'TV', 'Washer'],
      description: 'This modern studio apartment is perfect for singles or couples. Located in a quiet neighborhood with easy access to public transportation and shopping centers. The apartment features an open floor plan with a fully equipped kitchen, comfortable living area, and a cozy sleeping nook.',
      host: 'Sarah Johnson',
      hostImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      hostJoined: 'January 2020',
      hostResponseRate: '98%',
      hostResponseTime: 'Within an hour',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 2,
      title: 'Spacious 2 Bedroom House',
      location: 'Lower Kabete, Near Market',
      price: 25000,
      type: '2bed',
      category: 'agent',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      agent: 'Prime Realtors',
      agentImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      contact: '+254700000001',
      email: 'info@primerealtors.co.ke',
      amenities: ['Parking', 'Garden', 'Security', 'Water Tank', 'Backup Power', 'Furnished'],
      description: 'This spacious 2-bedroom house is located in a family-friendly neighborhood. The house features a large living room, modern kitchen, two bedrooms with built-in wardrobes, and a beautiful garden. Perfect for small families or professionals who need extra space.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 3,
      title: 'Cozy 1 Bedroom Apartment',
      location: 'Lower Kabete, Near School',
      price: 18000,
      type: '1bed',
      category: 'landlord',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'
      ],
      landlord: 'John Doe',
      landlordImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      contact: '+254700000002',
      email: 'johndoe@gmail.com',
      amenities: ['Security', 'Water Tank', 'Backup Power', 'Furnished', 'Internet Ready'],
      description: 'This cozy 1-bedroom apartment is perfect for singles or couples. The apartment features a comfortable living room, fully equipped kitchen, bedroom with built-in wardrobe, and a bathroom. Located in a quiet neighborhood with easy access to public transportation and shopping centers.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 4,
      title: 'Luxury AirBnB Villa',
      location: 'Lower Kabete, Riverside',
      price: 35000,
      type: 'villa',
      category: 'airbnb',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      rating: 4.8,
      reviews: 32,
      amenities: ['Pool', 'Wifi', 'Kitchen', 'Parking', 'Garden', 'Security', 'Air Conditioning'],
      description: 'This luxury villa offers a premium living experience with stunning views. The villa features spacious living areas, a modern kitchen, multiple bedrooms with en-suite bathrooms, and a beautiful garden with a swimming pool. Perfect for those seeking a high-end lifestyle.',
      host: 'Michael Brown',
      hostImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      hostJoined: 'March 2019',
      hostResponseRate: '100%',
      hostResponseTime: 'Within an hour',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 5,
      title: 'Modern 3 Bedroom Apartment',
      location: 'Lower Kabete, Near Mall',
      price: 45000,
      type: '3bed',
      category: 'agent',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'
      ],
      agent: 'Elite Properties',
      agentImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      contact: '+254700000003',
      email: 'info@eliteproperties.co.ke',
      amenities: ['Parking', 'Security', 'Water Tank', 'Backup Power', 'Furnished', 'Internet Ready'],
      description: 'This modern 3-bedroom apartment is perfect for families. The apartment features a spacious living room, modern kitchen, three bedrooms with built-in wardrobes, and two bathrooms. Located in a family-friendly neighborhood with easy access to shopping centers and schools.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 6,
      title: 'Charming Studio with Garden',
      location: 'Lower Kabete, Green Zone',
      price: 20000,
      type: 'studio',
      category: 'landlord',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      landlord: 'Jane Smith',
      landlordImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      contact: '+254700000004',
      email: 'janesmith@gmail.com',
      amenities: ['Garden', 'Security', 'Water Tank', 'Furnished', 'Internet Ready'],
      description: 'This charming studio apartment comes with a beautiful garden. The apartment features a comfortable living area, fully equipped kitchen, and a cozy sleeping nook. The garden provides a peaceful outdoor space for relaxation.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 7,
      title: 'Executive AirBnB Suite',
      location: 'Lower Kabete, Business District',
      price: 28000,
      type: 'suite',
      category: 'airbnb',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'
      ],
      rating: 4.9,
      reviews: 18,
      amenities: ['Wifi', 'Kitchen', 'Workspace', 'Gym', 'Pool', 'Air Conditioning', 'TV'],
      description: 'This executive suite is perfect for business travelers. The suite features a comfortable living area, fully equipped kitchen, workspace, and a cozy bedroom. Located in the business district with easy access to offices and restaurants.',
      host: 'David Wilson',
      hostImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      hostJoined: 'June 2021',
      hostResponseRate: '100%',
      hostResponseTime: 'Within an hour',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 8,
      title: 'Family Home with Garden',
      location: 'Lower Kabete, Residential Area',
      price: 55000,
      type: '4bed',
      category: 'agent',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      agent: 'Home Finder Kenya',
      agentImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      contact: '+254700000005',
      email: 'info@homefinderkenya.co.ke',
      amenities: ['Parking', 'Garden', 'Security', 'Water Tank', 'Backup Power', 'Furnished', 'Internet Ready'],
      description: 'This spacious family home is perfect for large families. The house features a large living room, modern kitchen, four bedrooms with built-in wardrobes, and three bathrooms. The beautiful garden provides a peaceful outdoor space for relaxation and play.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 9,
      title: 'Wangige Market Apartment',
      location: 'Wangige, Near Market',
      price: 16000,
      type: '1bed',
      category: 'landlord',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'
      ],
      landlord: 'Mary Wanjiku',
      landlordImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      contact: '+254700000006',
      email: 'marywanjiku@gmail.com',
      amenities: ['Security', 'Water Tank', 'Furnished', 'Internet Ready'],
      description: 'This cozy 1-bedroom apartment is located near the Wangige market. The apartment features a comfortable living room, fully equipped kitchen, bedroom with built-in wardrobe, and a bathroom. Perfect for singles or couples who want to be close to the market.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 10,
      title: 'Kingeero Heights',
      location: 'Kingeero Center',
      price: 22000,
      type: '2bed',
      category: 'agent',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      agent: 'Kingeero Properties',
      agentImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      contact: '+254700000007',
      email: 'info@kingeeroproperties.co.ke',
      amenities: ['Parking', 'Security', 'Water Tank', 'Backup Power', 'Furnished', 'Internet Ready'],
      description: 'This modern 2-bedroom apartment is located in the heart of Kingeero. The apartment features a spacious living room, modern kitchen, two bedrooms with built-in wardrobes, and two bathrooms. Perfect for small families or professionals.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 11,
      title: 'Lower Kabete Road Villa',
      location: 'Lower Kabete Road, Near USIU',
      price: 42000,
      type: '3bed',
      category: 'airbnb',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      rating: 4.7,
      reviews: 15,
      amenities: ['Pool', 'Wifi', 'Kitchen', 'Garden', 'Parking', 'Air Conditioning', 'TV'],
      description: 'This luxury villa is located near USIU on Lower Kabete Road. The villa features spacious living areas, a modern kitchen, three bedrooms with en-suite bathrooms, and a beautiful garden with a swimming pool. Perfect for those seeking a high-end lifestyle.',
      host: 'Emily Johnson',
      hostImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      hostJoined: 'August 2020',
      hostResponseRate: '100%',
      hostResponseTime: 'Within an hour',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 12,
      title: 'Wangige Shopping Plaza Apartment',
      location: 'Wangige, Near KCB',
      price: 25000,
      type: '2bed',
      category: 'agent',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      agent: 'Wangige Realtors',
      agentImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      contact: '+254700000008',
      email: 'info@wangigerealtors.co.ke',
      amenities: ['Parking', 'Security', 'Water Tank', 'Backup Power', 'Furnished', 'Internet Ready'],
      description: 'This modern 2-bedroom apartment is located near the KCB branch in Wangige. The apartment features a spacious living room, modern kitchen, two bedrooms with built-in wardrobes, and two bathrooms. Perfect for small families or professionals.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 13,
      title: 'Kingeero Garden Homes',
      location: 'Kingeero, Off Main Road',
      price: 18000,
      type: '1bed',
      category: 'landlord',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'
      ],
      landlord: 'James Kamau',
      landlordImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      contact: '+254700000009',
      email: 'jameskamau@gmail.com',
      amenities: ['Garden', 'Security', 'Water Tank', 'Furnished', 'Internet Ready'],
      description: 'This cozy 1-bedroom apartment is located in the Kingeero Garden Homes. The apartment features a comfortable living room, fully equipped kitchen, bedroom with built-in wardrobe, and a bathroom. The garden provides a peaceful outdoor space for relaxation.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 14,
      title: 'Lower Kabete Executive Suites',
      location: 'Lower Kabete Road, Near Alliance',
      price: 35000,
      type: '2bed',
      category: 'airbnb',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      rating: 4.6,
      reviews: 22,
      amenities: ['Wifi', 'Kitchen', 'Workspace', 'Security', 'Parking', 'Air Conditioning', 'TV'],
      description: 'These executive suites are perfect for business travelers. The suites feature comfortable living areas, fully equipped kitchens, workspaces, and cozy bedrooms. Located near Alliance High School with easy access to offices and restaurants.',
      host: 'Robert Taylor',
      hostImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      hostJoined: 'October 2019',
      hostResponseRate: '100%',
      hostResponseTime: 'Within an hour',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    },
    {
      id: 15,
      title: 'Wangige Student Apartment',
      location: 'Wangige, Near St. Pauls',
      price: 12000,
      type: 'studio',
      category: 'landlord',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
        'https://images.unsplash.com/photo-1560449017-7c4a30bad3ff',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
      ],
      landlord: 'Peter Njoroge',
      landlordImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      contact: '+254700000010',
      email: 'peternjoroge@gmail.com',
      amenities: ['Security', 'Water Tank', 'Furnished', 'Internet Ready'],
      description: 'This affordable studio apartment is perfect for students. The apartment features a comfortable living area, fully equipped kitchen, and a cozy sleeping nook. Located near St. Pauls University with easy access to campus and local amenities.',
      coordinates: { lat: -1.2921, lng: 36.8219 }
    }
  ];

  // Simulate loading and fetching property data
  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProperty = allProperties.find(p => p.id === parseInt(id));
      if (foundProperty) {
        setProperty(foundProperty);
      } else {
        // Property not found, show error message
        setProperty(null);
      }
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id, navigate]);

  // Handle contact button click
  const handleContactClick = () => {
    setShowContactInfo(true);
  };

  // Handle image navigation
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-2xl mx-auto">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold mb-2">Property Not Found</h2>
            <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/listings" 
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Listings
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-700 hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link to="/listings" className="text-gray-700 hover:text-indigo-600">
                    Listings
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-gray-500">{property.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Property Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
              <p className="text-gray-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.location}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600 mr-4">
                KES {property.price.toLocaleString()}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
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

          {/* Image Gallery */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-6">
            <img 
              src={property.images[activeImageIndex]} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`h-20 rounded-md overflow-hidden ${
                  index === activeImageIndex ? 'ring-2 ring-indigo-600' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${property.title} - Image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Property Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About this property</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Host/Agent/Landlord Info */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  {property.category === 'airbnb' ? 'Hosted by' : 
                   property.category === 'agent' ? 'Listed by' : 
                   'Landlord'}
                </h2>
                <div className="flex items-center">
                  <img 
                    src={property.category === 'airbnb' ? property.hostImage : 
                         property.category === 'agent' ? property.agentImage : 
                         property.landlordImage} 
                    alt={property.category === 'airbnb' ? property.host : 
                         property.category === 'agent' ? property.agent : 
                         property.landlord} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">
                      {property.category === 'airbnb' ? property.host : 
                       property.category === 'agent' ? property.agent : 
                       property.landlord}
                    </h3>
                    {property.category === 'airbnb' && (
                      <div className="text-sm text-gray-600">
                        <p>Joined {property.hostJoined}</p>
                        <p>{property.hostResponseRate} response rate</p>
                        <p>Usually responds {property.hostResponseTime}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                
                {showContactInfo ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{property.contact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{property.email}</p>
                    </div>
                    <div className="pt-4">
                      <Link 
                        to={`/map?property=${property.id}`}
                        className="w-full flex justify-center items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        View on Map
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-4">
                      Click the button below to reveal contact information for this property.
                    </p>
                    <button
                      onClick={handleContactClick}
                      className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Show Contact Info
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allProperties
              .filter(p => p.id !== property.id && (p.type === property.type || p.category === property.category))
              .slice(0, 3)
              .map((similarProperty) => (
                <motion.div
                  key={similarProperty.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img 
                      src={similarProperty.images[0]} 
                      alt={similarProperty.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-medium">
                      KES {similarProperty.price.toLocaleString()}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium text-white ${
                        similarProperty.category === 'airbnb' ? 'bg-[#FF385C]' : 
                        similarProperty.category === 'agent' ? 'bg-indigo-600' : 
                        'bg-emerald-600'
                      }`}>
                        {similarProperty.category === 'airbnb' ? 'AirBnB' : 
                         similarProperty.category === 'agent' ? 'Agent' : 
                         'Landlord'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{similarProperty.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{similarProperty.location}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        {similarProperty.rating && (
                          <>
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm">{similarProperty.rating}</span>
                          </>
                        )}
                      </div>
                      
                      <span className="text-sm font-medium text-gray-500">
                        {similarProperty.type === 'studio' ? 'Studio' : 
                         similarProperty.type === '1bed' ? '1 Bed' : 
                         similarProperty.type === '2bed' ? '2 Beds' : 
                         similarProperty.type === '3bed' ? '3 Beds' : 
                         similarProperty.type === '4bed' ? '4 Beds' : 
                         similarProperty.type === 'villa' ? 'Villa' : 
                         similarProperty.type === 'suite' ? 'Suite' : similarProperty.type}
                      </span>
                    </div>
                    
                    <Link 
                      to={`/property/${similarProperty.id}`}
                      className="block w-full text-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 