import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-700 to-red-500 text-white">
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
  );
} 