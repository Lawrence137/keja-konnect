import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Footer from './Footer';
import SignOut from './auth/SignOut';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Listings', href: '/listings' },
  { name: 'Map', href: '/map' },
  { name: 'Saved', href: '/saved' },
  { name: 'About', href: '/about' },
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Keja Konnect</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors border border-green-800 shadow-sm"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 px-3 py-1 rounded-md border border-green-200/50 ${
                  location.pathname === item.href
                    ? 'text-red-600 border-green-400/70 bg-green-50/50'
                    : 'text-gray-900 hover:text-red-600 hover:border-green-300/70 hover:bg-green-50/30'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isAuthenticated ? (
              <SignOut />
            ) : (
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600 transition-colors px-3 py-1 rounded-md border border-green-200/50 hover:border-green-300/70 hover:bg-green-50/30"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-3/4 overflow-y-auto bg-gradient-to-br from-green-900 to-green-800 shadow-xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-green-700/30">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">Keja Konnect</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white hover:bg-green-700/30 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-6 py-8">
                <div className="space-y-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition-all ${
                          location.pathname === item.href
                            ? 'bg-red-500 text-white shadow-md'
                            : 'text-green-100 hover:bg-green-700/30 hover:text-white'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-green-700/30">
                  {isAuthenticated ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      <SignOut isMobile />
                    </motion.div>
                  ) : (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                      >
                        <Link
                          to="/login"
                          className="block w-full rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 text-center text-base font-medium text-white shadow-md hover:from-red-700 hover:to-red-600 transition-all transform hover:scale-[1.02]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Log in
                        </Link>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="mt-4"
                      >
                        <Link
                          to="/signup"
                          className="block w-full rounded-lg border border-green-500/50 px-4 py-3 text-center text-base font-medium text-green-100 hover:bg-green-700/30 transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Sign up
                        </Link>
                      </motion.div>
                    </>
                  )}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="mt-10 text-center text-green-200/70 text-sm"
                >
                  <p>© 2025 Keja Konnect</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {children}
      </main>

      {isHomePage && <Footer />}
    </div>
  );
} 