// app/experience/[slug]/loading.tsx
import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-screen bg-black-100 text-white">
            {/* Hero Section Skeleton */}
            <div className="relative bg-gradient-to-br from-slate-900 via-purple/20 to-slate-900 py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="animate-pulse">
                        {/* Back button skeleton */}
                        <div className="w-32 h-6 bg-slate-700 rounded mb-8"></div>

                        <div className="flex items-start justify-between mb-8">
                            <div className="flex-1">
                                {/* Title skeleton */}
                                <div className="w-3/4 h-12 bg-slate-700 rounded mb-4"></div>
                                {/* Company skeleton */}
                                <div className="w-1/2 h-8 bg-slate-700 rounded mb-4"></div>
                                {/* Details skeleton */}
                                <div className="flex gap-6 mb-4">
                                    <div className="w-32 h-6 bg-slate-700 rounded"></div>
                                    <div className="w-32 h-6 bg-slate-700 rounded"></div>
                                    <div className="w-24 h-6 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                            {/* Status badge skeleton */}
                            <div className="w-24 h-8 bg-slate-700 rounded-full"></div>
                        </div>

                        {/* Overview skeleton */}
                        <div className="space-y-3 max-w-4xl">
                            <div className="w-full h-6 bg-slate-700 rounded"></div>
                            <div className="w-5/6 h-6 bg-slate-700 rounded"></div>
                            <div className="w-4/5 h-6 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Metrics Section Skeleton */}
            <div className="py-16 bg-slate-900/50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="animate-pulse">
                        {/* Section title skeleton */}
                        <div className="w-64 h-8 bg-slate-700 rounded mx-auto mb-12"></div>

                        {/* Metrics grid skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-slate-700 rounded-lg"></div>
                                        <div>
                                            <div className="w-16 h-6 bg-slate-700 rounded mb-2"></div>
                                            <div className="w-24 h-4 bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="w-full h-4 bg-slate-700 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements Section Skeleton */}
            <div className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="animate-pulse">
                        <div className="w-48 h-8 bg-slate-700 rounded mx-auto mb-12"></div>

                        <div className="space-y-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-slate-700 rounded-lg mt-1"></div>
                                        <div className="flex-1">
                                            <div className="w-48 h-6 bg-slate-700 rounded mb-2"></div>
                                            <div className="space-y-2 mb-4">
                                                <div className="w-full h-4 bg-slate-700 rounded"></div>
                                                <div className="w-3/4 h-4 bg-slate-700 rounded"></div>
                                            </div>
                                            <div className="w-24 h-6 bg-slate-700 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Loading Indicator */}
            <div className="fixed bottom-8 right-8">
                <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                    <div className="w-5 h-5 border-2 border-purple border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm text-slate-300">Loading experience details...</span>
                </div>
            </div>
        </div>
    );
}