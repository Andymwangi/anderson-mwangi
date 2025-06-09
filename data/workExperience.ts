import { Code, Shield, TrendingUp, Users } from "lucide-react";

export const workExperience = [
    {
        id: 1,
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        location: "Nairobi, Kenya",
        period: "Jan 2025 – Present",
        duration: "5+ months",
        thumbnail: "/api/placeholder/80/80",
        desc: "Developing secure web applications for 15+ clients with measurable business impact",
        shortDesc: "Building scalable web applications for diverse clients",
        slug: "freelance-full-stack-developer",
        type: "current",
        metrics: [
            { label: "Revenue Generated", value: "KES 300,000+", icon: TrendingUp },
            { label: "Active Clients", value: "15+", icon: Users },
            { label: "Projects Delivered", value: "20+", icon: Code },
            { label: "Uptime Maintained", value: "99.9%", icon: Shield }
        ],
        keyAchievements: [
            "Generated average revenue increases of KES 300,000+ for clients",
            "Maintained 99.9% uptime across all client applications",
            "Implemented secure authentication systems with zero security breaches",
            "Improved database query performance by 40% through optimization",
            "Built responsive interfaces with cross-browser compatibility"
        ],
        technologies: ["React.js", "Vue.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "Docker"],
        responsibilities: [
            "Develop and maintain secure, always-on web applications",
            "Debug and troubleshoot production environment issues",
            "Build responsive user interfaces using modern frameworks",
            "Implement secure authentication systems and role-based access controls",
            "Write comprehensive unit tests and support QA processes",
            "Design optimized database schemas"
        ]
    },
    {
        id: 2,
        title: "Junior Full Stack Developer",
        company: "Bakari Ventures",
        location: "Nairobi, Kenya",
        period: "Oct 2024 – Jan 2025",
        duration: "4 months",
        thumbnail: "/api/placeholder/80/80",
        desc: "Led development of enterprise applications reducing manual workload by 70%",
        shortDesc: "Enterprise application development and optimization",
        slug: "junior-full-stack-bakari-ventures",
        type: "past",
        metrics: [
            { label: "Workload Reduction", value: "70%", icon: TrendingUp },
            { label: "API Performance", value: "50% faster", icon: Code },
            { label: "Load Speed", value: "40% faster", icon: Shield },
            { label: "Applications Built", value: "3", icon: Users }
        ],
        keyAchievements: [
            "Led development and testing of 3 enterprise-level applications",
            "Reduced manual workload by 70% through automation",
            "Optimized backend APIs achieving 50% improvement in response times",
            "Implemented Redis caching solutions accelerating load speeds by 40%",
            "Enhanced system security through robust authentication measures"
        ],
        technologies: ["Node.js", "Express.js", "Redis", "PostgreSQL", "React.js", "Docker", "JWT"],
        responsibilities: [
            "Lead development and testing of enterprise applications",
            "Debug and resolve production issues",
            "Optimize backend APIs for performance",
            "Implement caching solutions and database optimization",
            "Enhance system security measures",
            "Contribute to software engineering process improvements"
        ]
    },
    {
        id: 3,
        title: "IT Intern – Digital Systems",
        company: "Office of the Registrar of Political Parties (ORPP)",
        location: "Nairobi, Kenya",
        period: "Jan 2024 – Sep 2024",
        duration: "9 months",
        thumbnail: "/api/placeholder/80/80",
        desc: "Contributed to RegisVault development processing 100,000+ documents",
        shortDesc: "Digital file management system development",
        slug: "it-intern-orpp",
        type: "past",
        metrics: [
            { label: "Documents Processed", value: "100,000+", icon: Code },
            { label: "Processing Reduction", value: "30%", icon: TrendingUp },
            { label: "Retrieval Time", value: "Days to Seconds", icon: Shield },
            { label: "System Uptime", value: "99.8%", icon: Users }
        ],
        keyAchievements: [
            "Contributed to RegisVault development processing 100,000+ documents",
            "Developed automated data validation scripts reducing manual processing by 30%",
            "Participated in comprehensive system testing and QA processes",
            "Collaborated on performance enhancements reducing retrieval time from days to seconds",
            "Ensured application stability through rigorous testing"
        ],
        technologies: ["React.js", "TypeScript", "PostgreSQL", "Python", "OCR Technologies", "Git"],
        responsibilities: [
            "Contribute to secure digital file management system development",
            "Develop automated data validation scripts",
            "Participate in system testing and quality assurance",
            "Collaborate on performance enhancement initiatives",
            "Ensure application stability through comprehensive testing"
        ]
    },
    {
        id: 4,
        title: "IT Intern – Legal Information Systems",
        company: "Kenya Law",
        location: "Nairobi, Kenya",
        period: "Sep 2023 – Jan 2024",
        duration: "5 months",
        thumbnail: "/api/placeholder/80/80",
        desc: "Optimized database systems reducing query time by 40%",
        shortDesc: "Legal database optimization and management",
        slug: "it-intern-kenya-law",
        type: "past",
        metrics: [
            { label: "Query Performance", value: "40% faster", icon: TrendingUp },
            { label: "System Stability", value: "95%+", icon: Shield },
            { label: "Search Accuracy", value: "98%+", icon: Code },
            { label: "Compliance Score", value: "100%", icon: Users }
        ],
        keyAchievements: [
            "Optimized database systems improving search functionality by 40%",
            "Developed document management solutions enhancing system organization",
            "Conducted comprehensive system testing and debugging",
            "Implemented fixes improving overall system stability by 95%",
            "Enhanced regulatory compliance through improved documentation"
        ],
        technologies: ["SQL", "PostgreSQL", "Python", "React.js", "Document Management Systems"],
        responsibilities: [
            "Optimize database systems and improve search functionality",
            "Develop document management solutions",
            "Conduct comprehensive system testing and debugging",
            "Implement fixes for improved system stability",
            "Enhance system organization and compliance measures"
        ]
    }
];
