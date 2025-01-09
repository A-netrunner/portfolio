import { icons } from "lucide-react";
import React from "react";

const technicalSkills = [
  { name: "JavaScript", level: "Advanced", Icon: icons.Javascript },
  { name: "React", level: "Advanced", Icon: icons.React },
  { name: "Node.js", level: "Intermediate", Icon: icons.Nodejs },
  { name: "CSS", level: "Advanced", Icon: icons.Css },
  { name: "HTML", level: "Advanced", Icon: icons.Html5 },
];

const professionalSkills = [
  { name: "Problem Solving", level: "Advanced" },
  { name: "Team Leadership", level: "Advanced" },
  { name: "Communication", level: "Advanced" },
  { name: "Project Management", level: "Intermediate" },
  { name: "Agile/Scrum", level: "Advanced" },
];

const SkillCard = ({ skill }) => (
  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
    <div className="flex items-center mb-2">
      {skill.Icon && <skill.Icon className="h-6 w-6 text-purple-500 mr-3" />}
      <h3 className="text-lg font-medium text-white">{skill.name}</h3>
    </div>
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-grow rounded-full bg-gray-700">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
                    ${skill.level === "Advanced" ? "w-full" : "w-2/3"}`}
        />
      </div>
      <span className="text-sm text-gray-400">{skill.level}</span>
    </div>
  </div>
);

const Skill = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
          My Expertise
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Combining technical excellence with professional acumen to deliver
          outstanding results
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Technical Skills
          </h3>
          <div className="grid gap-4">
            {technicalSkills.map((skill, index, icons) => (
              <SkillCard key={index} skill={skill} icons={icons} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Professional Skills
          </h3>
          <div className="grid gap-4">
            {professionalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
