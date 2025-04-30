"use client";

import React, { useState, useEffect } from 'react';
import { certifications } from '@/data';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('certifications-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="certifications-section" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Certifications</span>
      </h1>
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            className="bg-black bg-opacity-30 p-6 rounded-xl border border-gray-800 hover:border-purple transition-all"
            whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(203, 172, 249, 0.2)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: visible ? 1 : 0, 
              y: visible ? 0 : 20 
            }}
            transition={{ duration: 0.5, delay: visible ? index * 0.1 : 0 }}
          >
            <div className="flex items-center mb-4">
              <FaCertificate className="text-purple text-2xl mr-3" />
              <h3 className="text-lg font-medium">{cert.name}</h3>
            </div>
            <div className="text-sm text-gray-400 mb-1">Issuer: {cert.issuer}</div>
            <div className="text-sm text-gray-400">Year: {cert.year}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 