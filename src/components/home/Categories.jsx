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

export default function Categories() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
  );
} 