import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const founders = [
    {
      name: "Lawrence Kimani",
      role: "Developer & Co-Founder",
      bio: "A passionate developer with over 5 years of experience in web development.",
      image: "/Lawrence.jpg",
      skills: ["React", "Node.js", "Firebase", "SEO"]
    },
    {
      name: "Fidelix Maundu",
      role: "Marketer & Co-Founder",
      bio: "Fidel brings his marketing expertise to Keja Konnect, with a focus on growth strategies.",
      image: "/Fidel2.jpg",
      skills: ["Digital Marketing", "Growth Hacking"]
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-900/50 via-green-800/50 to-green-900/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Keja Konnect</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing the rental property market in Kenya by connecting tenants, landlords, and agents in a seamless, efficient platform.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {founders.map((founder, index) => (
            <motion.div 
              key={index}
              className="relative group w-full md:w-[400px]"
              variants={itemVariants}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
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
                  <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                  <p className="text-red-400 font-medium mb-3">{founder.role}</p>
                  <p className="text-green-100 mb-6">{founder.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {founder.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-1.5 bg-white/10 text-green-100 rounded-full text-sm backdrop-blur-sm border border-white/5 hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/about"
            className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group"
          >
            Learn More About Us
            <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 