"use client";

import React, { useState, useEffect } from 'react';
import { techStack } from '@/data';
import { motion } from 'framer-motion';

const TechStack = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById('tech-stack-section');
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
    <section id="tech-stack-section" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {techStack.map((tech, index) => (
          <div key={index} className="bg-black bg-opacity-30 p-6 rounded-xl">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-medium">{tech.name}</h3>
              <span className="text-purple font-bold">{tech.proficiency}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div 
                className="bg-purple h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: visible ? `${tech.proficiency}%` : 0 }}
                transition={{ 
                  duration: 1.5, 
                  delay: visible ? index * 0.1 : 0,
                  ease: "easeOut" 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack; 