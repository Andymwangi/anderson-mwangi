// app/experience/[slug]/not-found.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, AlertCircle, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black-100 text-white flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Error Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="p-6 bg-slate-800/50 rounded-full border border-slate-700">
                            <AlertCircle className="w-16 h-16 text-purple" />
                        </div>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Experience Not Found
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            The work experience you're looking for doesn't exist or may have been moved.
                        </p>
                    </motion.div>

                    {/* Available Experiences */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Search className="w-5 h-5 text-purple" />
                            <h2 className="text-lg font-semibold text-white">Available Experiences</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                            {[
                                { title: "Freelance Full Stack Developer", slug: "freelance-full-stack-developer" },
                                { title: "Junior Full Stack Developer", slug: "junior-full-stack-bakari-ventures" },
                                { title: "IT Intern - ORPP", slug: "it-intern-orpp" },
                                { title: "IT Intern - Kenya Law", slug: "it-intern-kenya-law" }
                            ].map((exp, index) => (
                                <Link key={index} href={`/experience/${exp.slug}`}>
                                    <motion.div
                                        className="p-3 bg-slate-800/50 rounded-lg border border-slate-600 hover:border-purple/50 transition-colors duration-200 cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className="text-slate-300 hover:text-white transition-colors">
                                            {exp.title}
                                        </span>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/#experience">
                            <motion.button
                                className="flex items-center gap-2 px-6 py-3 bg-purple hover:bg-purple/80 text-white rounded-lg font-medium transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Experience Timeline
                            </motion.button>
                        </Link>
                        <Link href="/">
                            <motion.button
                                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-purple text-purple hover:bg-purple/10 rounded-lg font-medium transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Home className="w-5 h-5" />
                                Go to Homepage
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Additional Help */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-slate-400 text-sm"
                    >
                        <p>
                            If you believe this is an error, please{' '}
                            <Link href="/#contact" className="text-purple hover:text-white transition-colors underline">
                                contact me
                            </Link>{' '}
                            and I'll look into it.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}