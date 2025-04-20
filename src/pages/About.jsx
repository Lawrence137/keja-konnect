import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const founders = [
    {
      name: "Lawrence Kimani",
      role: "Developer & Co-Founder",
      bio: "A passionate developer with over 5 years of experience in web development. John specializes in creating scalable and user-friendly applications that solve real-world problems.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      skills: ["React", "Node.js", "Firebase", "UI/UX Design"],
      linkedin: "https://linkedin.com/in/johndoe"
    },
    {
      name: "Fidelix Maundu",
      role: "Marketer & Co-Founder",
      bio: "Fidel brings his marketing expertise to Keja Konnect, with a focus on growth strategies and user acquisition. His background in digital marketing helps connect landlords with the right tenants.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      skills: ["Digital Marketing", "Growth Hacking", "Content Strategy"],
      linkedin: "https://linkedin.com/in/janesmith"
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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">About Keja Konnect</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Keja Konnect is revolutionizing the rental property market in Kenya by connecting tenants, landlords, and agents in a seamless, efficient platform.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Mission</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <p className="text-green-100 text-lg leading-relaxed">
              We're on a mission to simplify the rental property search process in Kenya. By leveraging technology, we're creating a platform that makes it easier for tenants to find their perfect home and for landlords to connect with reliable tenants. Our goal is to eliminate the stress and inefficiencies in the current rental market while promoting transparency and trust between all parties involved.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Meet Our Founders</h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {founders.map((founder, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/30 transition-all hover:shadow-xl"
                variants={itemVariants}
              >
                <div className="relative h-64 bg-green-800">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&background=1b4332&color=fff&size=400`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                  <p className="text-red-400 font-medium mb-4">{founder.role}</p>
                  <p className="text-green-100 mb-4">{founder.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-green-800/50 text-green-100 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">Our Story</h2>
          <p className="text-green-100 text-lg leading-relaxed mb-6">
            Keja Konnect was born out of a shared frustration with the traditional rental property search process in Kenya. Our founders, coming from different professional backgrounds, recognized the need for a more efficient and transparent platform that would benefit all stakeholders in the rental market.
          </p>
          <p className="text-green-100 text-lg leading-relaxed">
            What started as a simple idea has grown into a comprehensive platform that's changing how people find and rent properties in Kenya. We're proud to be at the forefront of this digital transformation in the real estate sector, and we're committed to continuously improving our services to better serve our users.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 