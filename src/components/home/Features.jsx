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

export default function Features() {
  return (
    <section className="py-24 bg-green-600 overflow-hidden relative">
      {/* Modern geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-green-800"></span>
            <span className="bg-green-900/50 text-black-900 text-sm font-medium px-4 py-2 rounded-full">
              Why Choose Us
            </span>
            <span className="h-px w-8 bg-green-800"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-black-900 tracking-tight">
            Experience the Keja Konnect
          </h2>
          
          <div className="relative mt-2">
            <h3 className="text-2xl md:text-3xl font-bold text-black-400">
              Difference
            </h3>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-green-900">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>

          <p className="text-lg text-black-500 max-w-2xl mx-auto font-medium mt-4">
            We make finding your next home simple, seamless, and stress-free
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-200 rounded-3xl transform transition-transform md:group-hover:scale-105 duration-500 scale-105 md:scale-100"></div>
              <div className="relative p-8 rounded-3xl border border-green-300 md:hover:border-green-500 border-green-500 md:border-green-300 transition-colors duration-500 bg-white/10 backdrop-blur-sm">
                {/* Icon container with gradient background */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-500 p-4 transform rotate-0 md:-rotate-6 transition-transform md:group-hover:rotate-0">
                    <feature.icon className="w-full h-full text-white transform rotate-0 md:rotate-6 transition-transform md:group-hover:rotate-0" />
                  </div>
                  {/* Decorative dot pattern */}
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_2px,transparent_2px)] bg-[length:10px_10px]"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-green-700 md:text-gray-900 md:group-hover:text-green-700 transition-colors">
                  {feature.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-white/80 text-green-600 flex items-center justify-center opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 