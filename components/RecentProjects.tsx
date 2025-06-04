"use client";

import { useState, useEffect } from "react";
import { FaLocationArrow, FaTimes, FaChartLine } from "react-icons/fa";
import { projectCategories } from "@/data";
import { PinContainer } from "./ui/Pin";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Link from 'next/link';
import router from "next/router";
// Define types for our project data
interface ProjectTestimonial {
  quote: string;
  name: string;
  title: string;
}

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  category: string;
  client: string;
  clientLogo: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  impact: string[];
  testimonial: ProjectTestimonial;
}

// Enhanced projects data with Kenyan client information
const enhancedProjects: Project[] = [
  {
    id: 1,
    title: "BookWise - University Library Management System",
    des: "BookWise is a university library management web app that allows users to borrow books and read descriptions and summaries of a vast collection of books.",
    img: "/bookwise.PNG",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link: "https://bookwise-libraryapp.vercel.app/",
    category: "Full Stack App",
    client: "Soma Library",
    clientLogo: "/uon-logo.png",
    fullDescription: "BookWise revolutionized a local community's library system( Soma Library ) by digitizing over 50,000 book records and creating an intuitive borrowing system that works across all departments.",
    challenge: "The community was struggling with an outdated library system that caused long queues, lost books, and inefficient resource allocation.",
    solution: "We developed a comprehensive library management system with mobile-responsive interfaces, real-time availability updates, and integrated student ID verification.",
    impact: [
      "Reduced book processing time by 75%",
      "Increased student book borrowing by 40%",
      "Decreased lost book incidents by 85%",
      "Enabled 24/7 book reservation from anywhere"
    ],
    testimonial: {
      quote: "BookWise has transformed how our students access academic resources. The system's reliability and ease of use have made a significant difference in our operations.",
      name: "Mrs. Elizabeth Mwangi",
      title: "Head Librarian, Soma Library"
    }
  },
  {
    id: 2,
    title: "RegisVault - Digital File Management System",
    des: "A digital file management system that leverages OCR for document uploading and secure storage.",
    img: "/regisvault.PNG",
    iconLists: ["/next.svg", "/ts.svg", "/re.svg", "/tail.svg"],
    link: "https://regisvault.vercel.app/",
    category: "Full Stack App",
    client: "Office of the Registrar of Political Parties",
    clientLogo: "/orpp-logo.png",
    fullDescription: "RegisVault was developed for the Office of the Registrar of Political Parties (ORPP) Kenya to digitize their massive archives of political party documentation and enable secure, searchable access.",
    challenge: "ORPP was drowning in physical paperwork with over 75 registered political parties, leading to document retrieval delays of up to 3 days and security vulnerabilities.",
    solution: "We implemented an OCR-powered document management system with role-based access control, advanced search capabilities, and automated document verification features.",
    impact: [
      "Digitized over 100,000 documents in the first 6 months",
      "Reduced document retrieval time from days to seconds",
      "Cut operational costs by 35% annually",
      "Improved compliance with election transparency regulations"
    ],
    testimonial: {
      quote: "RegisVault has been instrumental in our digital transformation journey. The system's OCR capability and security features have made our regulatory work significantly more efficient.",
      name: "James Mutua",
      title: "Deputy Registrar, ORPP Kenya"
    }
  },
  {
    id: 3,
    title: "Minty - Banking Web Application",
    des: "A secure banking web application that facilitates seamless transactions and user authentication.",
    img: "/Minty.PNG",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "https://minty-bank-app.vercel.app/",
    category: "Full Stack App",
    client: "Jaza",
    clientLogo: "/jaza-logo.png",
    fullDescription: "Minty was developed as a prototype for a local financial lending institution (Jaza's) digital transformation initiative, focusing on youth savings and lending solutions with seamless mobile money integration and financial education tools.",
    challenge: "jaza needed to attract younger customers who were abandoning traditional banking for mobile money platforms, leading to a 23% decline in new youth accounts.",
    solution: "We created a mobile-first banking application with M-Pesa integration, gamified financial education modules, and simplified KYC processes tailored to Kenyan regulations.",
    impact: [
      "Increased new youth accounts by 45% in the first quarter",
      "Processed over Ksh 2.5 million in transactions within two months",
      "Reduced account opening time from 2 days to 15 minutes",
      "97% customer satisfaction rating from user surveys"
    ],
    testimonial: {
      quote: "Minty has helped us reconnect with the youth market in a way we never thought possible. The integration with local payment systems and the intuitive design has been a game-changer.",
      name: "Sarah Wanjiku",
      title: "Digital lendingManager, Jaza"
    }
  },
  {
    id: 4,
    title: "LaundryBasket - Laundry E-commerce Platform",
    des: "A comprehensive laundry service marketplace integrating seamless payments via PayPal and M-Pesa, with real-time order tracking and customer loyalty features for local laundry businesses.",
    img: "/laundrybasket.PNG",
    iconLists: ["/next.svg", "/js.svg", "/tail.svg", "/postgres.svg", "/docker.svg"],
    link: "https://laundrybasket-web.vercel.app/",
    category: "Full Stack App",
    client: "Cleanex Laundry Services",
    clientLogo: "/cleanex-logo.png",
    fullDescription: "LaundryBasket transformed Cleanex from a single physical laundromat in Westlands, Nairobi to a digital platform connecting over 25 local laundry providers with customers across the city.",
    challenge: "Small laundry businesses in Nairobi were struggling with inconsistent customer flow, inefficient manual bookkeeping, and limited market reach in a highly competitive industry.",
    solution: "We built a marketplace platform with scheduling, M-Pesa payment integration, real-time order tracking, and a loyalty program specifically designed for local laundry businesses.",
    impact: [
      "Connected 25+ laundry providers with 3,000+ customers",
      "Increased average monthly revenue for vendors by 65%",
      "Processed over 5,000 orders in the first year",
      "Created 35 new delivery jobs for local youth"
    ],
    testimonial: {
      quote: "LaundryBasket has transformed our small business into a digital success story. The M-Pesa integration works flawlessly for our customers, and the order management system has eliminated our booking headaches.",
      name: "Grace Muthoni",
      title: "Founder, Cleanex Laundry Services"
    }
  },
  {
    id: 5,
    title: "Jadamy Elite Academy - School Website",
    des: "A modern, responsive school website featuring enrollment capabilities, curriculum information, event calendars, and a parent portal for easy communication between staff and families.",
    img: "/jadamyelite.PNG",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/shadcn.svg"],
    link: "https://jadamy-elite.vercel.app/",
    category: "Website",
    client: "Jadamy Elite Academy, Ruai",
    clientLogo: "/jadamy-logo.png",
    fullDescription: "Jadamy Elite Academy's website serves as a comprehensive digital hub for the school, featuring online enrollment, fee payment through local banking integrations, and a parent communication portal.",
    challenge: "The school was losing potential students to competitors with better online presence, and staff spent excessive time on routine communications and paperwork.",
    solution: "We developed a feature-rich school website with custom admissions workflow, M-Pesa fee payment integration, and a secure parent portal with academic performance tracking.",
    impact: [
      "Increased student enrollment by 32% in one academic year",
      "Reduced administrative workload by 20 hours per week",
      "Improved parent engagement with 85% of families using the portal regularly",
      "Streamlined fee collection process with 95% on-time payments"
    ],
    testimonial: {
      quote: "Our website has become central to our school operations. Parents particularly appreciate the ability to monitor their children's progress and communicate with teachers without visiting the school.",
      name: "Mrs Lucy Mwaniki",
      title: "Principal, Jadamy Elite Academy"
    }
  },
  {
    id: 6,
    title: "Learn Hub - Online Learning Platform",
    des: "A comprehensive online learning platform where users can discover, enroll in, and complete various courses with progress tracking and interactive content.",
    img: "/learnhub.PNG",
    iconLists: ["/next.svg", "/ts.svg", "/postgres.svg", "/prisma.svg", "/tail.svg"],
    link: "https://learn-hub.vercel.app/",
    category: "Full Stack App",
    client: "EduTech Kenya",
    clientLogo: "/edutech-logo.png",
    fullDescription: "Learn Hub was developed for EduTech Kenya to create a comprehensive online learning ecosystem that democratizes access to quality education across Kenya, featuring course management, user authentication, and progress tracking.",
    challenge: "Many Kenyans lack access to quality educational resources and professional development courses, especially in rural areas, leading to skills gaps in the growing digital economy.",
    solution: "We built a scalable learning platform with secure user authentication, course enrollment system, progress tracking, and mobile-responsive design optimized for low-bandwidth connections.",
    impact: [
      "Enrolled over 2,500 students in the first 3 months",
      "Delivered 50+ courses across technology and business skills",
      "Achieved 78% course completion rate",
      "Enabled learning access in 15+ counties across Kenya"
    ],
    testimonial: {
      quote: "Learn Hub has revolutionized how we deliver education to underserved communities. The platform's reliability and user-friendly design have made quality education accessible to thousands of Kenyans.",
      name: "Dr. Michael Kiprotich",
      title: "Director, EduTech Kenya"
    }
  },
  {
    id: 8,
    title: "Resume by Edna - Professional Portfolio",
    des: "A sophisticated portfolio website showcasing professional resume writing, content creation, and LinkedIn optimization services with an elegant, conversion-focused design.",
    img: "/resumeedna.PNG",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: "https://resume-by-edna.vercel.app/",
    category: "Website",
    client: "Edna Wanjiku",
    clientLogo: "/edna-logo.png",
    fullDescription: "Resume by Edna is a professional portfolio website that showcases Edna's expertise in resume writing, content creation, and LinkedIn optimization, designed to attract high-value clients and establish her as a thought leader in career development.",
    challenge: "Edna needed a professional online presence to differentiate herself in the competitive resume writing market and attract premium clients willing to invest in professional career services.",
    solution: "We created an elegant, conversion-optimized portfolio website featuring service showcases, client testimonials, before/after portfolio samples, and integrated booking system for consultations.",
    impact: [
      "Increased client inquiries by 150% within 2 months",
      "Attracted 25+ premium clients paying 3x previous rates",
      "Established strong personal brand with 95% client satisfaction",
      "Generated 40% of new business through website referrals"
    ],
    testimonial: {
      quote: "My new website has completely transformed my business. The professional design and clear presentation of my services has helped me attract the quality clients I've always wanted to work with.",
      name: "Edna Wanjiku",
      title: "Professional Resume Writer & Career Coach"
    }
  }

];

// Modal component - extracted for better organization
const ProjectModal = ({
  project,
  isOpen,
  onClose
}: {
  project: Project,
  isOpen: boolean,
  onClose: () => void
}) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl max-w-4xl w-[95%] max-h-[90vh] overflow-y-auto z-[1001] p-6 m-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-black bg-opacity-50 rounded-full p-2 z-10"
              onClick={onClose}
            >
              <FaTimes size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 className="text-3xl font-bold text-white mb-2 md:mb-0">{project.title}</h2>
                <span className="px-3 py-1 bg-purple text-white text-sm rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="md:col-span-2 relative rounded-lg overflow-hidden h-64 mb-6 shadow-xl">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              </div>

              <div className="space-y-4">
                <div className="bg-black bg-opacity-50 rounded-lg p-4 border border-gray-800 shadow-lg">
                  <h3 className="text-xl font-semibold text-purple mb-2">Client</h3>
                  <div className="flex items-center mb-2">
                    <p className="text-white text-lg">{project.client}</p>
                  </div>
                  <p className="text-gray-300">{project.fullDescription}</p>
                </div>

                <div className="bg-black bg-opacity-50 rounded-lg p-4 border border-gray-800 shadow-lg">
                  <h3 className="text-xl font-semibold text-purple mb-2">The Challenge</h3>
                  <p className="text-gray-300">{project.challenge}</p>
                </div>

                <div className="bg-black bg-opacity-50 rounded-lg p-4 border border-gray-800 shadow-lg">
                  <h3 className="text-xl font-semibold text-purple mb-2">Our Solution</h3>
                  <p className="text-gray-300">{project.solution}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black bg-opacity-50 rounded-lg p-4 border border-gray-800 shadow-lg">
                  <h3 className="text-xl font-semibold text-purple mb-2">Impact</h3>
                  <ul className="list-none space-y-2">
                    {project.impact.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="text-purple mr-2 mt-1">
                          <FaChartLine />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black bg-opacity-50 rounded-lg p-4 border border-gray-800 shadow-lg">
                  <h3 className="text-xl font-semibold text-purple mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.iconLists.map((icon, index) => (
                      <div key={index} className="flex items-center bg-gray-900 rounded-full px-3 py-1">
                        <img src={icon} alt={`tech-${index}`} className="w-4 h-4 mr-2" />
                        <span className="text-sm text-gray-300">
                          {icon.replace('/', '').replace('.svg', '').replace('.png', '')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.testimonial && (
                  <div className="bg-purple bg-opacity-10 rounded-lg p-4 border border-purple border-opacity-30 shadow-lg">
                    <h3 className="text-xl font-semibold text-purple mb-2">Client Testimonial</h3>
                    <div className="relative">
                      <div className="absolute text-purple opacity-20 text-5xl font-serif">❞</div>
                      <blockquote className="pl-8 text-gray-300 italic">
                        "{project.testimonial.quote}"
                      </blockquote>
                      <div className="mt-3 pl-8 text-sm">
                        <p className="text-white font-medium">{project.testimonial.name}</p>
                        <p className="text-gray-400">{project.testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple hover:bg-opacity-80 transition-all duration-300 text-white py-2 px-6 rounded-full flex items-center shadow-lg"
                >
                  Visit Live Project
                  <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const RecentProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPortalElement, setModalPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // For React's createPortal, we need to ensure we're on the client-side
    setModalPortalElement(document.body);
  }, []);

  const filteredProjects = enhancedProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const openProjectPage = (projectId: number) => {
    router.push(`/project/${projectId}`);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="py-20 relative" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mt-8 mb-12 flex-wrap px-4">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                ? "bg-purple text-white"
                : "bg-opacity-10 bg-gray-300 hover:bg-opacity-20"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <AnimatePresence>
          {filteredProjects.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={item.title} href="#">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>
                  <span className="text-xs bg-purple bg-opacity-20 text-purple px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex">
                    <Link
                      href={`/projects/${item.id}`}
                      className="flex justify-center items-center mr-4 bg-purple bg-opacity-10 hover:bg-opacity-20 text-purple px-3 py-1 rounded-full transition-all duration-300"
                    >
                      <p className="text-sm">Read More</p>
                    </Link>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center"
                    >
                      <p className="flex lg:text-sm md:text-xs text-sm text-purple">
                        Live Site
                      </p>
                      <FaLocationArrow className="ms-2 text-sm" color="#CBACF9" />
                    </a>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Render the modal using createPortal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default RecentProjects;