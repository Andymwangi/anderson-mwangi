"use client";
import React, { useState, useEffect } from 'react';
import { certifications } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaEye, FaTimes } from 'react-icons/fa';

// Type definition for certification
interface Certification {
  name: string;
  issuer: string;
  year: string | number;
  credentialId?: string;
  description?: string;
  image?: string;
  verifyUrl?: string;
}

const Certifications = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  // Remove unused floating variants
  // const floatingVariants = { ... }

  return (
    <>
      <section id="certifications-section" className="py-20">
        <h1 className="heading">
          My <span className="text-purple">Certifications</span>
        </h1>

        {/* Compact Container */}
        <div className="mt-10 max-w-4xl mx-auto px-4">
          <div className="bg-black bg-opacity-40 rounded-2xl border border-gray-800 p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {(certifications as Certification[]).map((cert, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: visible ? 1 : 0,
                    scale: visible ? 1 : 0.8,
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 0.5,
                    delay: visible ? index * 0.1 : 0,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                >
                  {/* Certificate Card */}
                  <div className="bg-gradient-to-br from-purple/10 to-transparent p-4 rounded-xl border border-gray-700 hover:border-purple/50 transition-all duration-300 h-32 flex flex-col justify-between">
                    {/* Icon and Title */}
                    <div className="flex flex-col items-center text-center">
                      <FaCertificate className="text-purple text-2xl mb-2" />
                      <h3 className="text-xs font-medium line-clamp-2 leading-tight">
                        {cert.name}
                      </h3>
                    </div>

                    {/* Year */}
                    <div className="text-xs text-gray-400 text-center">
                      {cert.year}
                    </div>
                  </div>

                  {/* Hover Overlay with View Button */}
                  <motion.div
                    className="absolute inset-0 bg-purple/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <button
                      onClick={() => openModal(cert)}
                      className="bg-purple hover:bg-purple/80 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-all duration-200"
                    >
                      <FaEye className="text-xs" />
                      View
                    </button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <FaCertificate className="text-purple text-2xl" />
                  <h2 className="text-xl font-semibold">{selectedCert.name}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Certificate Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Issuer</h3>
                    <p className="text-white">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Year Obtained</h3>
                    <p className="text-white">{selectedCert.year}</p>
                  </div>
                  {selectedCert.credentialId && (
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-medium text-gray-400 mb-2">Credential ID</h3>
                      <p className="text-white font-mono text-sm">{selectedCert.credentialId}</p>
                    </div>
                  )}
                  {selectedCert.description && (
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-medium text-gray-400 mb-2">Description</h3>
                      <p className="text-gray-300">{selectedCert.description}</p>
                    </div>
                  )}
                </div>

                {/* Certificate Image Placeholder */}
                <div className="bg-gradient-to-br from-purple/10 to-transparent border border-gray-700 rounded-xl p-8 text-center">
                  {selectedCert.image ? (
                    <img
                      src={selectedCert.image}
                      alt={`${selectedCert.name} Certificate`}
                      className="max-w-full h-auto mx-auto rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64">
                      <FaCertificate className="text-purple text-6xl mb-4" />
                      <p className="text-gray-400">Certificate image not available</p>
                      <p className="text-sm text-gray-500 mt-2">
                        This would display the actual certificate image
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple hover:bg-purple/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-1 text-center"
                    >
                      Verify Certificate
                    </a>
                  )}
                  <button
                    onClick={closeModal}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-1"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;