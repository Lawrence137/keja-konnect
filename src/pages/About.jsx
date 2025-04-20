import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const founders = [
    {
      name: "Lawrence Kimani",
      role: "Developer & Co-Founder",
      bio: "A passionate developer with over 5 years of experience in web development. Lawrence specializes in creating scalable and user-friendly applications that solve real-world problems.",
      image: "/Lawrence.jpg",
      skills: ["React", "Node.js", "Firebase", "SEO"],
      linkedin: "https://www.linkedin.com/in/lawrence-kimani-n-4b2218264/"
    },
    {
      name: "Fidelix Maundu",
      role: "Marketer & Co-Founder",
      bio: "Fidel brings his marketing expertise to Keja Konnect, with a focus on growth strategies and user acquisition. His background in digital marketing helps connect landlords with the right tenants.",
      image: "/Fidel2.jpg",
      skills: ["Digital Marketing", "Growth Hacking"],
      linkedin: "https://linkedin.com/in/fidelixmaundu"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900">
      {/* Hero Section */}
      <motion.div 
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Keja Konnect</h1>
          <div className="w-32 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing the rental property market in Kenya by connecting tenants, landlords, and agents in a seamless, efficient platform.
          </p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-green-100 text-lg leading-relaxed mb-6">
              We're on a mission to transform how people find and rent properties in Kenya. By leveraging cutting-edge technology, we're creating an ecosystem that makes property hunting efficient, transparent, and enjoyable.
            </p>
            <p className="text-green-100 text-lg leading-relaxed">
              Our platform connects property seekers with verified landlords and professional agents, ensuring a smooth and reliable rental experience for everyone involved.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
            {founders.map((founder, index) => (
              <motion.div 
                key={index}
                className="relative group w-full lg:w-[480px]"
                variants={itemVariants}
              >
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl text-center">
                  <div className="relative w-56 h-56 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-green-600 animate-spin-slow"></div>
                    <div className="absolute inset-1 rounded-full bg-green-900"></div>
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="absolute inset-2 rounded-full object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&background=1b4332&color=fff&size=400`;
                      }}
                    />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-3">{founder.name}</h3>
                    <p className="text-red-400 text-xl font-medium mb-4">{founder.role}</p>
                    <p className="text-green-100 text-lg mb-6">{founder.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {founder.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-white/10 text-green-100 rounded-full text-sm backdrop-blur-sm border border-white/5 hover:border-white/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors group"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect on LinkedIn
                      <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.div 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-green-100 text-lg leading-relaxed mb-6">
              Keja Konnect was born out of a shared vision to revolutionize the rental property market in Kenya. Our founders, coming from technology and marketing backgrounds, recognized the need for a more efficient and transparent platform that would benefit all stakeholders in the rental market.
            </p>
            <p className="text-green-100 text-lg leading-relaxed">
              What started as a simple idea has grown into a comprehensive platform that's changing how people find and rent properties in Kenya. We're proud to be at the forefront of this digital transformation in the real estate sector, and we're committed to continuously improving our services to better serve our users.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 