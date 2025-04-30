import { motion } from "framer-motion";

const journeyPhotos = [
  {
    year: "2020",
    title: "Starting My Coding Journey",
    description: "Beginning with web fundamentals and diving into the world of development",
    image: "/api/placeholder/600/400",
    alt: "Learning to code"
  },
  {
    year: "2021",
    title: "First Internship",
    description: "Working as a Frontend Engineer Intern at Kenya Law, building my first professional web applications",
    image: "/bookwise.PNG",
    alt: "First professional project"
  },
  {
    year: "2022",
    title: "Backend Development",
    description: "Expanding my skills to backend technologies at ORPP Kenya, working with databases and APIs",
    image: "/regisvault.PNG",
    alt: "Backend development work"
  },
  {
    year: "2023",
    title: "Full Stack Freelancing",
    description: "Taking on independent projects and building complete solutions for various clients",
    image: "/minty.PNG",
    alt: "Freelance development work"
  },
  {
    year: "2024",
    title: "Leading Teams",
    description: "Stepping up as a Lead Software Engineer on startup projects, mentoring junior developers",
    image: "/laundrybasket.PNG",
    alt: "Team leadership"
  },
  {
    year: "2025",
    title: "Expanding Horizons",
    description: "Working with international clients and exploring new technologies to solve complex problems",
    image: "/api/placeholder/600/400",
    alt: "Current projects"
  }
];

const PhotoJourneyTimeline = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Professional Journey</h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            A visual timeline showcasing my growth as a developer through the years
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300 dark:bg-gray-700 md:block" />

          <div className="space-y-16">
            {journeyPhotos.map((item, index) => (
              <div key={item.year} className={`relative z-10 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Year marker on the line */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 md:static md:flex md:w-1/2 md:translate-x-0">
                  <div className={`relative ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} hidden md:flex md:w-full md:px-4`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                      {item.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ml-8 mt-6 md:ml-0 md:mt-0 md:w-1/2 md:px-4 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}
                >
                  <div className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
                    <div className="aspect-video">
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 md:hidden">
                        {item.year}
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Line from center to content on mobile */}
                  <div className="absolute -left-4 top-8 h-px w-8 bg-gray-300 dark:bg-gray-700 md:hidden"></div>
                  <div className="absolute -left-6 top-8 h-3 w-3 rounded-full bg-blue-600 md:hidden"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoJourneyTimeline;