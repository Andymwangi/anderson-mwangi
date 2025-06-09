// app/experience/[slug]/error.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    RefreshCw,
    AlertTriangle,
    Home,
    Bug,
    MessageCircle,
    ExternalLink
} from 'lucide-react';

interface ErrorPageProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
    // Log error for debugging (in production, this would go to your error tracking service)
    React.useEffect(() => {
        console.error('Experience page error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-black-100 text-white flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Error Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="p-6 bg-red-500/20 rounded-full border border-red-500/30">
                            <AlertTriangle className="w-16 h-16 text-red-400" />
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
                            Something Went Wrong
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            We encountered an unexpected error while loading this experience page.
                        </p>
                    </motion.div>

                    {/* Error Details (Development Mode) */}
                    {process.env.NODE_ENV === 'development' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 text-left"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Bug className="w-5 h-5 text-red-400" />
                                <h2 className="text-lg font-semibold text-red-400">Error Details (Development)</h2>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-sm font-medium text-slate-300 mb-1">Error Message:</h3>
                                    <p className="text-sm text-red-300 font-mono bg-slate-800/50 p-2 rounded border border-slate-700">
                                        {error.message}
                                    </p>
                                </div>
                                {error.digest && (
                                    <div>
                                        <h3 className="text-sm font-medium text-slate-300 mb-1">Error Digest:</h3>
                                        <p className="text-sm text-slate-400 font-mono bg-slate-800/50 p-2 rounded border border-slate-700">
                                            {error.digest}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Troubleshooting Steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    >
                        <h2 className="text-xl font-semibold text-white mb-4">What you can try:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-purple font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Refresh the page</h3>
                                        <p className="text-sm text-slate-400">Sometimes a simple refresh fixes temporary issues</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-purple font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Check your connection</h3>
                                        <p className="text-sm text-slate-400">Ensure you have a stable internet connection</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-purple font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Try a different experience</h3>
                                        <p className="text-sm text-slate-400">Browse other work experiences that might load properly</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-purple/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-purple font-bold text-sm">4</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Contact me if it persists</h3>
                                        <p className="text-sm text-slate-400">Let me know about the issue so I can fix it</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Available Experiences Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                    >
                        <h2 className="text-lg font-semibold text-white mb-4">Try these experiences instead:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { title: "Freelance Full Stack Developer", slug: "freelance-full-stack-developer", status: "Current" },
                                { title: "Junior Full Stack Developer", slug: "junior-full-stack-bakari-ventures", status: "Recent" },
                                { title: "IT Intern - ORPP", slug: "it-intern-orpp", status: "Past" },
                                { title: "IT Intern - Kenya Law", slug: "it-intern-kenya-law", status: "Past" }
                            ].map((exp, index) => (
                                <Link key={index} href={`/experience/${exp.slug}`}>
                                    <motion.div
                                        className="p-3 bg-slate-800/50 rounded-lg border border-slate-600 hover:border-purple/50 transition-all duration-200 cursor-pointer group"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">
                                                {exp.title}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${exp.status === 'Current'
                                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                    : exp.status === 'Recent'
                                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                        : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                                                }`}>
                                                {exp.status}
                                            </span>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            onClick={reset}
                            className="flex items-center gap-2 px-6 py-3 bg-purple hover:bg-purple/80 text-white rounded-lg font-medium transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RefreshCw className="w-5 h-5" />
                            Try Again
                        </motion.button>

                        <Link href="/#experience">
                            <motion.button
                                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-600 text-slate-300 hover:border-purple hover:text-white rounded-lg font-medium transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Experience
                            </motion.button>
                        </Link>

                        <Link href="/">
                            <motion.button
                                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-600 text-slate-300 hover:border-purple hover:text-white rounded-lg font-medium transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Home className="w-5 h-5" />
                                Homepage
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-slate-400 text-sm space-y-2"
                    >
                        <p>If this error keeps happening, I'd appreciate you letting me know!</p>
                        <div className="flex items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="flex items-center gap-1 text-purple hover:text-white transition-colors underline"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Contact Me
                            </Link>
                            <span className="text-slate-600">•</span>
                            <Link
                                href="https://github.com/Andymwangi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-purple hover:text-white transition-colors underline"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Report on GitHub
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}