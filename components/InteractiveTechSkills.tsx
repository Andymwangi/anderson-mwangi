import { useState } from 'react';
import { motion } from 'framer-motion';
import { techStack } from '@/data';

interface TechSkillImage {
  skill: string;
  image: string;
  caption: string;
}

interface Tech {
  name: string;
  proficiency: number;
}

const techSkillImages: TechSkillImage[] = [
  {
    skill: "Next.js 14/15",
    image: "/next.svg",
    caption: "Building modern web applications with Next.js"
  },
  {
    skill: "React.js",
    image: "/react.svg",
    caption: "Creating interactive UIs with React"
  },
  {
    skill: "TypeScript",
    image: "/ts.svg",
    caption: "Ensuring type safety in complex applications"
  },
  {
    skill: "Node.js",
    image: "/node.svg",
    caption: "Developing backend services with Node.js"
  },
  {
    skill: "Tailwind CSS",
    image: "/tail.svg",
    caption: "Designing responsive interfaces with Tailwind"
  },
  {
    skill: "PostgreSQL",
    image: "/postgres.svg",
    caption: "Working with relational databases"
  },
  {
    skill: "Payment APIs (PayPal, M-Pesa)",
    image: "/paypal.svg", 
    caption: "Implementing secure payment solutions"
  }
];

// Default image to show when no skill is hovered
const defaultImage: TechSkillImage = {
  image: "/next.svg",
  caption: "Hover over my skills to see me in action!",
  skill: ""
};

export default function InteractiveTechSkills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  const getImageForSkill = (skillName: string): TechSkillImage => {
    const skillImage = techSkillImages.find(item => item.skill === skillName);
    return skillImage || defaultImage;
  };
  
  const currentImage = activeSkill 
    ? getImageForSkill(activeSkill)
    : defaultImage;

  return (
    <div className="mx-auto my-16 max-w-6xl px-4">
      <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">My Technical Skills</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400">
        Hover over my skills to see real examples of my work with these technologies
      </p>
      
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
        {/* Skills List */}
        <div className="w-full lg:w-1/2">
          <div className="grid gap-4 md:grid-cols-2">
            {techStack.map((tech: Tech, index: number) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`cursor-pointer rounded-lg p-4 transition-all duration-300 hover:shadow-md 
                  ${activeSkill === tech.name 
                    ? 'bg-blue-50 dark:bg-blue-900/20' 
                    : 'bg-gray-50 dark:bg-gray-800'}`}
                onMouseEnter={() => setActiveSkill(tech.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex justify-between">
                  <h3 className="font-medium">{tech.name}</h3>
                  <span className="text-blue-600 dark:text-blue-400">{tech.proficiency}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div 
                    className="h-full rounded-full bg-blue-600 dark:bg-blue-500" 
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Image Display */}
        <motion.div 
          className="hidden h-96 w-full rounded-xl bg-gray-100 shadow-lg dark:bg-gray-800 lg:block lg:w-1/2"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <motion.img
              key={currentImage.image}
              src={currentImage.image}
              alt={activeSkill || "Technical skills"}
              className="h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <p>{currentImage.caption}</p>
              {activeSkill && (
                <p className="mt-1 text-sm text-white/80">
                  Proficiency: {techStack.find((tech: Tech) => tech.name === activeSkill)?.proficiency}%
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}