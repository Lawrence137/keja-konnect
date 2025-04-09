// import { useState } from 'react';
// import { FunnelIcon } from '@heroicons/react/24/outline';

// const propertyTypes = [
//   { id: 'studio', name: 'Studio' },
//   { id: '1bed', name: '1 Bedroom' },
//   { id: '2bed', name: '2 Bedrooms' },
//   { id: '3bed', name: '3 Bedrooms' },
//   { id: '4bed', name: '4+ Bedrooms' },
// ];

// const priceRanges = [
//   { id: '0-10000', name: 'Under KES 10,000' },
//   { id: '10000-20000', name: 'KES 10,000 - 20,000' },
//   { id: '20000-30000', name: 'KES 20,000 - 30,000' },
//   { id: '30000+', name: 'Over KES 30,000' },
// ];

// const amenities = [
//   { id: 'parking', name: 'Parking' },
//   { id: 'security', name: 'Security' },
//   { id: 'water', name: 'Water Supply' },
//   { id: 'electricity', name: 'Electricity' },
//   { id: 'internet', name: 'Internet' },
// ];

// // Mock data for properties
// const mockProperties = [
//   {
//     id: 1,
//     title: 'Modern Studio Apartment',
//     location: 'Lower Kabete, Near Junction',
//     price: 15000,
//     type: 'studio',
//     image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
//     amenities: ['parking', 'security', 'water', 'electricity'],
//   },
//   {
//     id: 2,
//     title: 'Spacious 2 Bedroom House',
//     location: 'Lower Kabete, Near Market',
//     price: 25000,
//     type: '2bed',
//     image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
//     amenities: ['parking', 'security', 'water', 'electricity', 'internet'],
//   },
//   // Add more mock properties as needed
// ];

// export default function Search() {
//   const [filters, setFilters] = useState({
//     propertyType: [],
//     priceRange: [],
//     amenities: [],
//   });

//   const [showFilters, setShowFilters] = useState(false);

//   const handleFilterChange = (category, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [category]: prev[category].includes(value)
//         ? prev[category].filter((item) => item !== value)
//         : [...prev[category], value],
//     }));
//   };

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between border-b border-gray-200 pb-6 pt-24">
//           <h1 className="text-2xl font-bold tracking-tight text-gray-900">Properties in Lower Kabete</h1>
//           <button
//             type="button"
//             className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//             onClick={() => setShowFilters(!showFilters)}
//           >
//             <FunnelIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
//             Filters
//           </button>
//         </div>

//         <div className="pt-6 lg:grid lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5">
//           {/* Filters */}
//           <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
//             <div className="space-y-6">
//               {/* Property Type */}
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900">Property Type</h3>
//                 <div className="mt-4 space-y-4">
//                   {propertyTypes.map((type) => (
//                     <div key={type.id} className="flex items-center">
//                       <input
//                         id={type.id}
//                         name="property-type"
//                         type="checkbox"
//                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                         checked={filters.propertyType.includes(type.id)}
//                         onChange={() => handleFilterChange('propertyType', type.id)}
//                       />
//                       <label htmlFor={type.id} className="ml-3 text-sm text-gray-600">
//                         {type.name}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Price Range */}
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
//                 <div className="mt-4 space-y-4">
//                   {priceRanges.map((range) => (
//                     <div key={range.id} className="flex items-center">
//                       <input
//                         id={range.id}
//                         name="price-range"
//                         type="checkbox"
//                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                         checked={filters.priceRange.includes(range.id)}
//                         onChange={() => handleFilterChange('priceRange', range.id)}
//                       />
//                       <label htmlFor={range.id} className="ml-3 text-sm text-gray-600">
//                         {range.name}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Amenities */}
//               <div>
//                 <h3 className="text-sm font-medium text-gray-900">Amenities</h3>
//                 <div className="mt-4 space-y-4">
//                   {amenities.map((amenity) => (
//                     <div key={amenity.id} className="flex items-center">
//                       <input
//                         id={amenity.id}
//                         name="amenities"
//                         type="checkbox"
//                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                         checked={filters.amenities.includes(amenity.id)}
//                         onChange={() => handleFilterChange('amenities', amenity.id)}
//                       />
//                       <label htmlFor={amenity.id} className="ml-3 text-sm text-gray-600">
//                         {amenity.name}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Property Grid */}
//           <div className="mt-6 lg:col-span-3 lg:mt-0 xl:col-span-4">
//             <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
//               {mockProperties.map((property) => (
//                 <div
//                   key={property.id}
//                   className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
//                 >
//                   <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-96">
//                     <img
//                       src={property.image}
//                       alt={property.title}
//                       className="h-full w-full object-cover object-center sm:h-full sm:w-full"
//                     />
//                   </div>
//                   <div className="flex flex-1 flex-col space-y-2 p-4">
//                     <h3 className="text-sm font-medium text-gray-900">
//                       <a href="#">
//                         <span aria-hidden="true" className="absolute inset-0" />
//                         {property.title}
//                       </a>
//                     </h3>
//                     <p className="text-sm text-gray-500">{property.location}</p>
//                     <p className="text-base font-medium text-gray-900">KES {property.price.toLocaleString()}/month</p>
//                     <div className="flex flex-wrap gap-2">
//                       {property.amenities.map((amenity) => (
//                         <span
//                           key={amenity}
//                           className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
//                         >
//                           {amenities.find((a) => a.id === amenity)?.name}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 