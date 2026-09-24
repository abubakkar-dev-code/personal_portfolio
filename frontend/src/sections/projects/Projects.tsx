import { MoveUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectSection = [
    {
      name: "E-Commerce Website",
      description:
        "This is a comprehensive e-commerce website that allows users to browse, search, and purchase products. It features a modern and responsive design, intuitive user interface, and seamless navigation.",
      image: "/images/ecommerce.png",
      github: "https://github.com/abubakkar-dev-code/E-Commerce-Website",
      live: "https://ecommerce-website-1.vercel.app/",
    },
    {
      name: "E-Commerce Website",
      description:
        "This is a comprehensive e-commerce website that allows users to browse, search, and purchase products. It features a modern and responsive design, intuitive user interface, and seamless navigation.",
      image: "/images/ecommerce.png",
      github: "https://github.com/abubakkar-dev-code/E-Commerce-Website",
      live: "https://ecommerce-website-1.vercel.app/",
    },
    {
      name: "E-Commerce Website",
      description:
        "This is a comprehensive e-commerce website that allows users to browse, search, and purchase products. It features a modern and responsive design, intuitive user interface, and seamless navigation.",
      image: "/images/ecommerce.png",
      github: "https://github.com/abubakkar-dev-code/E-Commerce-Website",
      live: "https://ecommerce-website-1.vercel.app/",
    },
  ];

  return (
    <div className="w-11/12 mx-auto mt-8 lg:px-10">
      <div className="flex justify-start items-start">
        <div>
          <p className="text-violet-600 font-bold text-xl">Projects</p>
          <h2 className="text-4xl font-bold mt-3">My Recent Work</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {projectSection.map((project) => (
          <div className="group overflow-hidden bg-[#0D0C19] rounded-2xl border border-border hover:border-violet-600/50 transition-all duration-300">
            <div className="w-full h-62">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                src={project.image}
                alt="E-commerce-img"
              />
            </div>
            <div className="p-5 mt-3">
              <div>
                <h2 className="text-2xl font-bold mt-3">{project.name}</h2>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <p className="px-3 py-1 rounded-full border border-border text-xs ">
                    React
                  </p>
                  <p className="px-3 py-1 rounded-full border border-border text-xs">
                    Express JS
                  </p>
                  <p className="px-3 py-1 rounded-full border border-border text-xs">
                    Mongo db
                  </p>
                  <p className="px-3 py-1 rounded-full border border-border text-xs">
                    Redux
                  </p>
                </div>
              </div>
              <div className="mt-8 flex  items-center">
                <a
                  href={project.github}
                  className="text-violet-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-violet-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                >
                  <MoveUpRight />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
