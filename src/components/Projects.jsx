import React, { useState, useEffect } from 'react';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
const sections = ['home', 'skills', 'projects', 'contact'];

const projects = [
    {
        title: "Restaurant near me ",
        description: "A website that shows restaurants near you",
        tech: ["React", "Node.js", "MongoDB", "Ola API"],
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.p4S1QVLTTCkfLYHEvfCc5wHaE8%26pid%3DApi&f=1&ipt=e0c19d8aad4111e11f36361aa057a460bc1d87e4edd24a9d58648003a807889a&ipo=images",
        demo: "https://demo.example.com",
        github: "https://github.com/example/project"
    },
    {
        title: "Booking vehicle",
        description: "Real-time social media analytics dashboard",
        tech: ["PHP", "MySql", "Tailwind CSS"],
        image: "/homepage.png",
        demo: "https://demo.example.com",
        github: "https://github.com/example/project"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application",
        tech: ["Next.js", "TypeScript", "PostgreSQL"],
        image: "/api/placeholder/600/400",
        demo: "https://demo.example.com",
        github: "https://github.com/example/project"
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website with modern design",
        tech: ["React", "Tailwind CSS", "Framer Motion"," Mail JS"],
        image: "/api/placeholder/600/400",
        demo: "https://demo.example.com",
        github: "https://github.com/example/project"
    }
];

const Project = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    const [visibleProjects, setVisibleProjects] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            setScrollProgress(progress);

            // Determine active section
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
                        setActiveSection(section);
                    }
                }
            });

            // Check which projects are visible
            const projectElements = document.querySelectorAll('.project-card');
            const visible = [];
            projectElements.forEach((element, index) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < windowHeight * 0.75 && rect.bottom >= 0) {
                    visible.push(index);
                }
            });
            setVisibleProjects(visible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="projects" className="relative min-h-screen bg-gray-900">
            {/* Progress Bar and Navigation Circles */}
            <div className="fixed left-0 top-0 bottom-0 w-6 bg-gray-800 z-50 hidden md:flex flex-col items-center justify-center">
                {/* Progress Bar */}
                <div className="absolute hidden left-0 top-0 bottom-0 w-2 bg-gray-800">
                    <div 
                        className="bg-gradient-to-b from-purple-500 to-pink-500 w-full transition-all duration-200"
                        style={{ height: `${scrollProgress}%` }}
                    />
                </div>
                
                {/* Navigation Circles */}
                <div className="relative z-10 flex flex-col gap-8">
                    {sections.map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeSection === section
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                                    : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                            title={section.charAt(0).toUpperCase() + section.slice(1)}
                        />
                    ))}
                </div>
            </div>

            {/* Projects Content */}
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card backdrop-blur-sm bg-white/5 rounded-xl overflow-hidden transform transition-all duration-500 ${
                                visibleProjects.includes(index) 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-20'
                            }`}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                                    >
                                        <ExternalLinkIcon className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                                    >
                                        <GithubIcon className="w-4 h-4" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;