import {
  FaAws,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const About = () => {
  const frontend = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
  ];

  const backend = [
    { name: "Node", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Auth", icon: <FaReact /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGitAlt /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "CI/CD", icon: <FaAws /> },
  ];

  const TechStack = ({ title, technologies }) => (
    <div className="mt-7">
      <p className="text-sm font-bold tracking-widest text-text-secondary">
        {title}
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="mt-5 flex gap-2 sm:gap-4 justify-center  items-center rounded-xl border border-border px-2 lg:px-4 py-3 bg-white/2 hover:border-violet-600/50
            hover:bg-violet-600/5 transition-all duration-300"
          >
            <div className="shrink-0 text-xl flex justify-center text-violet-600">
              {technology.icon}
            </div>
            <div className="text-sm font-medium">{technology.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <div className="w-11/12 mx-auto px-4 lg:px-10 mt-12 flex flex-col lg:flex-row gap-10 lg:gap-14">
        <div className="flex-1 min-w-0">
          <p className="text-violet-600 font-bold text-2xl">About Me</p>
          <h1 className="font-bold text-4xl mt-6">A little about me</h1>
          <p className="text-text-secondary text-base max-w-xl mt-8 lg:text-lg leading-relaxed">
            I'm a Full Stack Developer specializing in building and sometimes
            designing digital experiences. Currently focused on building
            scalable web applications and integrating AI solutions to create
            intelligent and user-friendly products.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <p className="py-3 px-4 border-2 rounded-2xl border-border">Problem Solver</p>
            <p className="py-3 px-4 border-2 rounded-2xl border-border">Quick Learner</p>
            <p className="py-3 px-4 border-2 rounded-2xl border-border">Team Player</p>
          </div>
        </div>
        <div className="hidden lg:block w-px bg-border/70"></div>
        <div className="flex-1 min-w-0 w-full mt-2">
          <p className="font-bold text-violet-600 text-xl">TECH STACK</p>
          <div>
            <TechStack title="FRONTEND" technologies={frontend} />
            <TechStack title="BACKEND" technologies={backend} />
            <TechStack title="TOOLS & CLOUD" technologies={tools} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
