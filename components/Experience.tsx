// components/Experience.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ExternalLink, TrendingUp, Users, Code, Shield } from "lucide-react";
import { workExperience } from "@/data/workExperience";


const Experience = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedJob, setSelectedJob] = useState<typeof workExperience[0] | null>(null);

  return (
    <div className="py-20 w-full">
      <motion.h1
        className="heading mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-purple">work experience</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto px-4">
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-blue-500 to-cyan-400"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                className="relative flex items-start group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredId(job.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${job.type === 'current'
                      ? 'bg-purple border-purple shadow-lg shadow-purple/50'
                      : 'bg-slate-800 border-slate-600 group-hover:border-purple group-hover:shadow-lg group-hover:shadow-purple/30'
                    } transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={job.thumbnail}
                    alt={job.company}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {job.type === 'current' && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="ml-8 flex-1 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                          <div className="flex items-center gap-2 text-purple font-semibold mb-2">
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{job.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                        {job.type === 'current' && (
                          <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-4 leading-relaxed">{job.desc}</p>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                        {job.metrics.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700"
                            whileHover={{ scale: 1.05 }}
                          >
                            <metric.icon className="w-4 h-4 text-purple mx-auto mb-1" />
                            <div className="text-sm font-bold text-white">{metric.value}</div>
                            <div className="text-xs text-slate-400">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.technologies.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs bg-purple/20 text-purple rounded-md border border-purple/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {job.technologies.length > 6 && (
                          <span className="px-2 py-1 text-xs bg-slate-700 text-slate-300 rounded-md">
                            +{job.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover Actions */}
                  <AnimatePresence>
                    {hoveredId === job.id && (
                      <motion.div
                        className="flex gap-3 mt-4 pt-4 border-t border-slate-700"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link href={`/experience/${job.slug}`}>
                          <motion.button
                            className="flex items-center gap-2 px-4 py-2 bg-purple hover:bg-purple/80 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Details
                          </motion.button>
                        </Link>
                        <motion.button
                          onClick={() => setSelectedJob(job)}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Quick View
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedJob.title}</h2>
                  <p className="text-purple font-semibold">{selectedJob.company}</p>
                  <p className="text-slate-400">{selectedJob.period}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedJob.keyAchievements.map((achievement, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start gap-2">
                        <span className="text-purple mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-purple/20 text-purple rounded-lg border border-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link href={`/experience/${selectedJob.slug}`}>
                    <motion.button
                      className="w-full py-3 bg-purple hover:bg-purple/80 text-white rounded-lg transition-colors duration-200 font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Full Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;