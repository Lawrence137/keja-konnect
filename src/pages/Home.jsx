import { Link } from 'react-router-dom';
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
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Find Your Dream Home in Lower Kabete
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Discover the perfect property in Lower Kabete, Kiambu. From cozy studios to spacious family homes,
                  find your ideal living space with our easy-to-use property search platform.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/search"
                    className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all hover:scale-105"
                  >
                    Start Searching
                  </Link>
                  <Link 
                    to="/map" 
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors group"
                  >
                    View Map <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Find Your Perfect Home</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to find your next home
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Keja Konnect makes it easy to find your perfect property in Lower Kabete. Browse through our extensive
            listings, view properties on the map, and connect with landlords directly.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 flex-none text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 