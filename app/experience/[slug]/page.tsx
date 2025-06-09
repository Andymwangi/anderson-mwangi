// app/experience/[slug]/page.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    Calendar,
    MapPin,
    ArrowLeft,
    TrendingUp,
    Users,
    Code,
    Shield,
    CheckCircle,
    Target,
    Zap,
    Award,
    BarChart3,
    Clock
} from 'lucide-react';

// This would typically come from a database or API
const getJobBySlug = (slug: string) => {
    const jobs = [
        {
            id: 1,
            title: "Freelance Full Stack Developer",
            company: "Self-Employed",
            location: "Nairobi, Kenya",
            period: "Jan 2025 – Present",
            duration: "5+ months",
            status: "current",
            slug: "freelance-full-stack-developer",
            overview: "As a freelance full stack developer, I've built and maintained secure, scalable web applications for over 15 clients across various industries. My focus has been on delivering high-quality solutions that drive measurable business outcomes while maintaining the highest security standards.",

            keyMetrics: [
                { label: "Revenue Generated", value: "KES 300,000+", icon: TrendingUp, description: "Average revenue increase per client" },
                { label: "Active Clients", value: "15+", icon: Users, description: "Ongoing client relationships" },
                { label: "Projects Delivered", value: "20+", icon: Code, description: "Successfully completed projects" },
                { label: "Uptime Maintained", value: "99.9%", icon: Shield, description: "System availability across all applications" },
                { label: "Performance Improvement", value: "40%", icon: Zap, description: "Average database query optimization" },
                { label: "Client Satisfaction", value: "100%", icon: Award, description: "Client retention rate" }
            ],

            responsibilities: [
                {
                    category: "Development & Architecture",
                    items: [
                        "Design and develop secure, scalable web applications using modern JavaScript frameworks",
                        "Implement robust backend APIs with Node.js, Express.js, and Python frameworks",
                        "Create responsive, cross-browser compatible user interfaces",
                        "Architect database schemas optimized for performance and scalability"
                    ]
                },
                {
                    category: "Security & Quality Assurance",
                    items: [
                        "Implement secure authentication systems with role-based access controls",
                        "Follow secure development principles and industry best practices",
                        "Write comprehensive unit tests and support QA processes",
                        "Conduct regular security audits and vulnerability assessments"
                    ]
                },
                {
                    category: "Operations & Maintenance",
                    items: [
                        "Debug and troubleshoot production environment issues",
                        "Maintain 99.9% uptime across all client applications",
                        "Provide ongoing technical support and maintenance",
                        "Implement CI/CD pipelines for automated deployments"
                    ]
                }
            ],

            keyAchievements: [
                {
                    title: "Revenue Impact",
                    description: "Generated average revenue increases of KES 300,000+ for clients through optimized web solutions",
                    impact: "high"
                },
                {
                    title: "System Reliability",
                    description: "Maintained 99.9% uptime across all client applications with zero security breaches",
                    impact: "high"
                },
                {
                    title: "Performance Optimization",
                    description: "Improved database query performance by 40% through schema optimization and caching",
                    impact: "medium"
                },
                {
                    title: "Client Satisfaction",
                    description: "Achieved 100% client retention rate with ongoing maintenance contracts",
                    impact: "high"
                },
                {
                    title: "Technical Excellence",
                    description: "Built comprehensive testing suites ensuring system reliability and performance",
                    impact: "medium"
                }
            ],

            technicalStack: {
                frontend: ["React.js", "Vue.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
                backend: ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "Django"],
                databases: ["MongoDB", "PostgreSQL", "Redis"],
                tools: ["Docker", "Git", "GitHub", "CI/CD Pipelines", "AWS", "Digital Ocean"],
                testing: ["Jest", "Cypress", "Unit Testing", "Integration Testing"]
            },

            projects: [
                {
                    name: "E-commerce Platform",
                    description: "Full-stack marketplace with payment processing and inventory management",
                    technologies: ["React.js", "Node.js", "PostgreSQL", "Stripe API"],
                    impact: "Increased client sales by 65%"
                },
                {
                    name: "SaaS Dashboard",
                    description: "Real-time analytics dashboard with role-based access control",
                    technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
                    impact: "Reduced manual reporting by 80%"
                },
                {
                    name: "Healthcare Management System",
                    description: "HIPAA-compliant patient management system with appointment scheduling",
                    technologies: ["Next.js", "Python", "PostgreSQL", "Redis"],
                    impact: "Streamlined operations for 3 clinics"
                }
            ],

            testimonials: [
                {
                    client: "Tech Startup CEO",
                    feedback: "Anderson delivered exactly what we needed - a scalable platform that grew with our business. His attention to security and performance was exceptional.",
                    project: "SaaS Platform Development"
                },
                {
                    client: "E-commerce Business Owner",
                    feedback: "The marketplace Anderson built increased our sales by 65% in the first year. His ongoing support has been invaluable.",
                    project: "E-commerce Platform"
                }
            ]
        },
        {
            id: 2,
            title: "Junior Full Stack Developer",
            company: "Bakari Ventures",
            location: "Nairobi, Kenya",
            period: "Oct 2024 – Jan 2025",
            duration: "4 months",
            status: "past",
            slug: "junior-full-stack-bakari-ventures",
            overview: "At Bakari Ventures, I led the development of enterprise-level applications that significantly reduced manual workload and improved operational efficiency. My focus was on backend optimization, API development, and implementing robust caching solutions.",

            keyMetrics: [
                { label: "Workload Reduction", value: "70%", icon: TrendingUp, description: "Manual process automation" },
                { label: "API Performance", value: "50%", icon: Code, description: "Response time improvement" },
                { label: "Load Speed", value: "40%", icon: Zap, description: "Application load time reduction" },
                { label: "Applications Built", value: "3", icon: Users, description: "Enterprise-level applications" },
                { label: "System Uptime", value: "99.5%", icon: Shield, description: "Production system availability" },
                { label: "Code Quality", value: "A+", icon: Award, description: "Code review ratings" }
            ],

            responsibilities: [
                {
                    category: "Application Development",
                    items: [
                        "Lead development and testing of 3 enterprise-level applications",
                        "Design and implement scalable backend architectures",
                        "Develop RESTful APIs with comprehensive documentation",
                        "Integrate third-party services and payment gateways"
                    ]
                },
                {
                    category: "Performance & Optimization",
                    items: [
                        "Optimize backend APIs achieving 50% improvement in response times",
                        "Implement Redis caching solutions accelerating load speeds by 40%",
                        "Database optimization and query performance tuning",
                        "Code profiling and performance monitoring"
                    ]
                },
                {
                    category: "Operations & Security",
                    items: [
                        "Debug and resolve production issues maintaining system uptime",
                        "Enhanced system security through robust authentication measures",
                        "Implement monitoring and alerting systems",
                        "Contribute to software engineering process improvements"
                    ]
                }
            ],

            keyAchievements: [
                {
                    title: "Automation Success",
                    description: "Led development of applications that reduced manual workload by 70%",
                    impact: "high"
                },
                {
                    title: "Performance Optimization",
                    description: "Optimized backend APIs achieving 50% improvement in response times",
                    impact: "high"
                },
                {
                    title: "Caching Implementation",
                    description: "Implemented Redis caching solutions accelerating load speeds by 40%",
                    impact: "medium"
                },
                {
                    title: "Security Enhancement",
                    description: "Enhanced system security through robust authentication and access controls",
                    impact: "high"
                }
            ],

            technicalStack: {
                frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
                backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
                databases: ["PostgreSQL", "Redis", "Database Optimization"],
                tools: ["Docker", "Git", "Postman", "PM2", "Nginx"],
                testing: ["Jest", "Mocha", "API Testing", "Load Testing"]
            },

            projects: [
                {
                    name: "Enterprise Resource Planning System",
                    description: "Comprehensive ERP system for inventory and employee management",
                    technologies: ["React.js", "Node.js", "PostgreSQL", "Redis"],
                    impact: "Reduced manual processes by 70%"
                },
                {
                    name: "Customer Relationship Management",
                    description: "CRM system with automated lead tracking and sales analytics",
                    technologies: ["Express.js", "PostgreSQL", "Chart.js"],
                    impact: "Improved sales tracking efficiency by 60%"
                },
                {
                    name: "Financial Management Dashboard",
                    description: "Real-time financial reporting and budget tracking system",
                    technologies: ["React.js", "Node.js", "PostgreSQL"],
                    impact: "Streamlined financial reporting process"
                }
            ]
        },
        // Add other jobs here...
    ];

    return jobs.find(job => job.slug === slug);
};

export async function generateStaticParams() {
    // This would typically fetch from your database/API
    const slugs = [
        'freelance-full-stack-developer',
        'junior-full-stack-bakari-ventures',
        'it-intern-orpp',
        'it-intern-kenya-law'
    ];

    return slugs.map((slug) => ({ slug }));
}

interface PageProps {
    params: {
        slug: string;
    };
}

export default function JobDetailPage({ params }: PageProps) {
    const job = getJobBySlug(params.slug);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black-100 text-white">
            {/* Hero Section */}
            <motion.div
                className="relative bg-gradient-to-br from-slate-900 via-purple/20 to-slate-900 py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/#experience">
                            <motion.button
                                className="flex items-center gap-2 text-purple hover:text-white transition-colors mb-8"
                                whileHover={{ x: -5 }}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back to Experience
                            </motion.button>
                        </Link>

                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <motion.h1
                                    className="text-4xl md:text-5xl font-bold mb-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    {job.title}
                                </motion.h1>
                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <h2 className="text-2xl text-purple font-semibold">{job.company}</h2>
                                    <div className="flex items-center gap-6 text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5" />
                                            <span>{job.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5" />
                                            <span>{job.duration}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {job.status === 'current' && (
                                <motion.span
                                    className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 font-medium"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Current Position
                                </motion.span>
                            )}
                        </div>

                        <motion.p
                            className="text-lg text-slate-300 leading-relaxed max-w-4xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {job.overview}
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Key Metrics Section */}
            <motion.section
                className="py-16 bg-slate-900/50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Key Metrics & Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {job.keyMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple/50 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-purple/20 rounded-lg border border-purple/30">
                                        <metric.icon className="w-6 h-6 text-purple" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                                        <div className="text-sm text-slate-400">{metric.label}</div>
                                    </div>
                                </div>
                                <p className="text-slate-300 text-sm">{metric.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Key Achievements Section */}
            <motion.section
                className="py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>
                    <div className="space-y-6">
                        {job.keyAchievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple/30 transition-all duration-300"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-2 rounded-lg mt-1 ${achievement.impact === 'high'
                                            ? 'bg-green-500/20 border border-green-500/30'
                                            : 'bg-blue-500/20 border border-blue-500/30'
                                        }`}>
                                        <CheckCircle className={`w-5 h-5 ${achievement.impact === 'high' ? 'text-green-400' : 'text-blue-400'
                                            }`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                                        <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                                        <span className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${achievement.impact === 'high'
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                            }`}>
                                            {achievement.impact.toUpperCase()} IMPACT
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Responsibilities Section */}
            <motion.section
                className="py-16 bg-slate-900/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Key Responsibilities</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {job.responsibilities.map((category, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Target className="w-6 h-6 text-purple" />
                                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {category.items.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="text-slate-300 leading-relaxed flex items-start gap-2"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                                        >
                                            <span className="text-purple mt-1 text-sm">•</span>
                                            <span className="text-sm">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Technical Stack Section */}
            <motion.section
                className="py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Technical Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {Object.entries(job.technicalStack).map(([category, technologies], index) => (
                            <motion.div
                                key={category}
                                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <h3 className="text-lg font-semibold text-purple mb-4 capitalize">
                                    {category.replace(/([A-Z])/g, ' $1').trim()}
                                </h3>
                                <div className="space-y-2">
                                    {technologies.map((tech, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="text-sm text-slate-300 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-600"
                                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                                        >
                                            {tech}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Projects Section */}
            {job.projects && (
                <motion.section
                    className="py-16 bg-slate-900/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Notable Projects</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {job.projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple/50 transition-all duration-300"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <h3 className="text-xl font-semibold text-white mb-3">{project.name}</h3>
                                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-purple mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 text-xs bg-purple/20 text-purple rounded-md border border-purple/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-700">
                                        <div className="flex items-center gap-2">
                                            <BarChart3 className="w-4 h-4 text-green-400" />
                                            <span className="text-sm text-green-400 font-medium">{project.impact}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            )}

            {/* Testimonials Section */}
            {job.testimonials && (
                <motion.section
                    className="py-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {job.testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.3 }}
                                >
                                    <div className="mb-6">
                                        <div className="text-4xl text-purple mb-4">"</div>
                                        <p className="text-slate-300 leading-relaxed italic">{testimonial.feedback}</p>
                                    </div>
                                    <div className="border-t border-slate-700 pt-4">
                                        <div className="text-white font-semibold">{testimonial.client}</div>
                                        <div className="text-sm text-slate-400">{testimonial.project}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            )}

            {/* CTA Section */}
            <motion.section
                className="py-16 bg-gradient-to-r from-purple/20 to-blue-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2
                        className="text-3xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        Interested in Similar Solutions?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-300 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.7 }}
                    >
                        Let's discuss how I can help you achieve similar results for your business.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    >
                        <Link href="/#contact">
                            <motion.button
                                className="px-8 py-3 bg-purple hover:bg-purple/80 text-white rounded-lg font-medium transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.button>
                        </Link>
                        <Link href="/#experience">
                            <motion.button
                                className="px-8 py-3 bg-transparent border border-purple text-purple hover:bg-purple/10 rounded-lg font-medium transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View All Experience
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}