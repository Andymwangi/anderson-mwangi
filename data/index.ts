export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
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
      id: 2,
      title: "BookWise - University Library Management System",
      des: "BookWise is a university library management web app that allows users to borrow books and read descriptions and summaries of a vast collection of books.",
      img: "/bookwise.PNG",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg"],
      link: "https://bookwise-libraryapp.vercel.app/",
      category: "Full Stack App"
    },
    {
      id: 3,
      title: "StoreIt - Digital File Management System",
      des: "A digital file management system that leverages OCR for document uploading and secure storage.",
      img: "/p3.svg",
      iconLists: ["/next.svg", "/ts.svg", "/re.svg", "tail.svg"],
      link: "/ui.storeIt.com",
      category: "Website"
    },
    {
      id: 4,
      title: "Minty - Banking Web Application",
      des: "A secure banking web application that facilitates seamless transactions and user authentication.",
      img: "/Minty.PNG",
      iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
      link: "https://minty-bank-app.vercel.app/",
      category: "Full Stack App"
    },
    {
      id: 5,
      title: "LearnHub - Advanced Learning Management System",
      des: "An innovative LMS combining the best of Udemy with unique personalized learning paths, real-time progress analytics, and integrated AI-powered tutoring for an enhanced educational experience.",
      img: "/placeholder-learnhub.png",
      iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/prisma.svg", "/postgres.svg"],
      link: "#",
      category: "Full Stack App"
    },
    {
      id: 6,
      title: "RegisVault - Enterprise File Management System",
      des: "A secure file management solution with departmental sharing capabilities, role-based access control, and collaborative tools allowing teams to work efficiently across organizational boundaries.",
      img: "/placeholder-regisvault.png",
      iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/appwrite.svg", "/drizzle.svg"],
      link: "#",
      category: "Full Stack App"
    },
    {
      id: 7,
      title: "LaundryBASKET - Laundry E-commerce Platform",
      des: "A comprehensive laundry service marketplace integrating seamless payments via PayPal and M-Pesa, with real-time order tracking and customer loyalty features for local laundry businesses.",
      img: "/placeholder-laundrybasket.png",
      iconLists: ["/next.svg", "/js.svg", "/tail.svg", "/postgres.svg", "/docker.svg"],
      link: "#",
      category: "Full Stack App"
    },
    {
      id: 8,
      title: "Jadamy Elite Academy - School Website",
      des: "A modern, responsive school website featuring enrollment capabilities, curriculum information, event calendars, and a parent portal for easy communication between staff and families.",
      img: "/placeholder-jadamy.png",
      iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/shadcn.svg"],
      link: "#",
      category: "Website"
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
  