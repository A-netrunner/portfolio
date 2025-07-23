
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaLeaf,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si';

const WebDevMarquee = () => {
  const technologies = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Python', icon: FaPython },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Docker', icon: FaDocker },
    { name: 'MongoDB', icon: FaLeaf },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Webpack', icon: SiWebpack },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Figma', icon: FaFigma }
  ];

  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="w-full bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 py-6 overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

        <div className="flex animate-marquee gap-8 md:gap-12">
          {duplicatedTechnologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="group flex items-center gap-3 min-w-fit cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <span className="text-sm md:text-base font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default WebDevMarquee;
