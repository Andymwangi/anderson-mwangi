import { notFound } from 'next/navigation';
import { FaLocationArrow, FaChartLine, FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

// Import your enhanced projects data (you'll need to export this from a separate file)
import { enhancedProjects } from '@/data/projects';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


interface ProjectPageProps {
    params: {
        id: string;
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = enhancedProjects.find((p: { id: number; }) => p.id === parseInt(params.id));

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Back Button */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-purple hover:text-white transition-colors mb-8"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Projects
                </Link>

                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                            <p className="text-xl text-gray-300 mb-4">{project.des}</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="px-4 py-2 bg-purple text-white rounded-full mb-4">
                                {project.category}
                            </span>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple hover:bg-opacity-80 transition-all duration-300 text-white py-3 px-6 rounded-full flex items-center"
                            >
                                Visit Live Project
                                <FaLocationArrow className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Image */}
                <div className="relative rounded-lg overflow-hidden h-96 mb-12 shadow-2xl">
                    <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Client Info */}
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-800">
                            <h2 className="text-2xl font-semibold text-purple mb-4">Client</h2>
                            <div className="flex items-center mb-4">
                                <h3 className="text-xl font-medium">{project.client}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
                        </div>

                        {/* Challenge */}
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-800">
                            <h2 className="text-2xl font-semibold text-purple mb-4">The Challenge</h2>
                            <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-800">
                            <h2 className="text-2xl font-semibold text-purple mb-4">Our Solution</h2>
                            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Impact */}
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-800">
                            <h2 className="text-2xl font-semibold text-purple mb-4">Impact & Results</h2>
                            <ul className="space-y-3">
                                {project.impact.map((item: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                                    <li key={index} className="flex items-start">
                                        <div className="text-purple mr-3 mt-1">
                                            <FaChartLine />
                                        </div>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technologies */}
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border border-gray-800">
                            <h2 className="text-2xl font-semibold text-purple mb-4">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.iconLists.map((icon: string | StaticImport, index: Key | null | undefined) => {
                                    // Handle the icon name extraction safely
                                    const getIconName = (iconPath: string | StaticImport): string => {
                                        if (typeof iconPath === 'string') {
                                            return iconPath.replace('/', '').replace('.svg', '').replace('.png', '');
                                        }
                                        // For StaticImport, try to extract from src property or return default
                                        return (iconPath as any)?.src?.replace('/', '').replace('.svg', '').replace('.png', '') || 'Technology';
                                    };

                                    return (
                                        <div key={index} className="flex items-center bg-gray-800 rounded-full px-4 py-2">
                                            <Image
                                                src={icon}
                                                alt={`tech-${index}`}
                                                width={20}
                                                height={20}
                                                className="mr-2"
                                            />
                                            <span className="text-sm text-gray-300">
                                                {getIconName(icon)}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Testimonial */}
                        {project.testimonial && (
                            <div className="bg-gradient-to-br from-purple/10 to-black rounded-lg p-6 border border-purple/30">
                                <h2 className="text-2xl font-semibold text-purple mb-4">Client Testimonial</h2>
                                <div className="relative">
                                    <div className="absolute text-purple opacity-20 text-6xl font-serif -top-2 -left-2">❞</div>
                                    <blockquote className="pl-8 text-gray-300 italic text-lg leading-relaxed">
                                        "{project.testimonial.quote}"
                                    </blockquote>
                                    <div className="mt-4 pl-8">
                                        <p className="text-white font-medium text-lg">{project.testimonial.name}</p>
                                        <p className="text-gray-400">{project.testimonial.title}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-purple/20 to-transparent rounded-lg p-8 border border-purple/30">
                    <h2 className="text-2xl font-semibold mb-4">Interested in a Similar Project?</h2>
                    <p className="text-gray-300 mb-6">Let's discuss how we can help bring your vision to life.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple hover:bg-opacity-80 transition-all duration-300 text-white py-3 px-8 rounded-full flex items-center justify-center"
                        >
                            View Live Project
                            <FaLocationArrow className="ml-2" />
                        </a>
                        <Link
                            href="/#contact"
                            className="border border-purple text-purple hover:bg-purple hover:text-white transition-all duration-300 py-3 px-8 rounded-full flex items-center justify-center"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const project = enhancedProjects.find(p => p.id === parseInt(params.id));

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} - Portfolio`,
        description: project.des,
        openGraph: {
            title: project.title,
            description: project.des,
            images: [project.img],
        },
    };
}

// Generate static params for all projects
export async function generateStaticParams() {
    return enhancedProjects.map((project) => ({
        id: project.id.toString(),
    }));
}
