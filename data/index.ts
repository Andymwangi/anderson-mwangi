export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Tech Stack", link: "#techstack" },
  { name: "Certifications", link: "#certifications" },
  { name: "Clients", link: "#clients" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building full stack apps with various technologies",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BookWise - University Library Management System",
    des: "BookWise is a university library management web app that allows users to borrow books and read descriptions and summaries of a vast collection of books.",
    img: "/bookwise.PNG",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
    link: "https://bookwise-libraryapp.vercel.app/",
    category: "Full Stack App",
    client: "University of Nairobi",
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
    client: "Jadamy Elite Academy, Nakuru",
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
      name: "Mrs. Lucy Mwaniki",
      title: "Principal, Jadamy Elite Academy"
    }
  }
];

export const projectCategories = ["All", "Full Stack App", "Website"];

export const techStack = [
  { name: "Next.js 14/15", proficiency: 92 },
  { name: "React.js", proficiency: 95 },
  { name: "TypeScript", proficiency: 88 },
  { name: "JavaScript", proficiency: 95 },
  { name: "Node.js", proficiency: 88 },
  { name: "Python", proficiency: 80 },
  { name: "Tailwind CSS", proficiency: 90 },
  { name: "Shadcn UI", proficiency: 85 },
  { name: "Framer Motion", proficiency: 80 },
  { name: "PostgreSQL", proficiency: 82 },
  { name: "MongoDB", proficiency: 80 },
  { name: "Prisma ORM", proficiency: 78 },
  { name: "Drizzle ORM", proficiency: 75 },
  { name: "Appwrite", proficiency: 72 },
  { name: "Docker", proficiency: 65 },
  { name: "Payment APIs (PayPal, M-Pesa)", proficiency: 78 }
];

export const certifications = [
  { name: "Python for Data Science", issuer: "IBM", year: "2021" },
  { name: "Data Engineering", issuer: "IBM", year: "2021" },
  { name: "Cisco CyberOps", issuer: "Cisco", year: "2023" },
  { name: "CCNA 1", issuer: "Cisco", year: "2022" },
  { name: "Junior Cybersecurity", issuer: "Cisco", year: "2023" },
  { name: "Endpoint Security", issuer: "Cisco", year: "2023" }
];

export const testimonials = [
  {
    quote:
      "Anderson's technical expertise and commitment to excellence transformed our vision into reality. His ability to tackle complex problems with innovative solutions is truly commendable.",
    name: "James Ochieng",
    title: "CTO of TechWave Solutions",
  },
  {
    quote:
      "Working with Anderson was a game-changer. His proficiency in backend and full-stack development helped streamline our operations efficiently.",
    name: "Sarah Njeri",
    title: "Project Manager at Innovate Hub",
  },
  {
    quote:
      "Anderson demonstrated exceptional skill and professionalism throughout our collaboration. His ability to integrate secure banking features in Minty exceeded our expectations.",
    name: "David Kamau",
    title: "CEO of FinTrust Ltd.",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - Kenya Law",
    desc: "Assisted in the development of a web-based legal research platform using React.js, improving user interaction and responsiveness.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer - ORPP Kenya",
    desc: "Designed and implemented secure and scalable backend services for ORPP's digital file management system, integrating OCR for document processing.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Full-Stack Developer",
    desc: "Developed end-to-end web solutions for clients, including Minty (a banking app), StoreIt (a document management system), and BookWise (a library management system).",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Software Engineer - Startup Project",
    desc: "Spearheaded the development of a fintech platform, optimizing financial transaction processes and enhancing user security.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    name: "Twitter",
    img: "/twit.svg",
    url: "https://x.com/andymwangii", // Replace with actual URL
  },
  {
    id: 2,
    name: "LinkedIn",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/anderson-mwangi/", // Replace with actual URL
  },
  {
    id: 3,
    name: "GitHub",
    img: "/git.svg",
    url: "https://github.com/Andymwangi", // Replace with actual URL
  },
];
