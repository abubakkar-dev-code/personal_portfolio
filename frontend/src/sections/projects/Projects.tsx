import { MoveUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import getProjects from "../../services/projectsApi/projectApi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
        setError("No-Projects Found");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-11/12 mx-auto mt-8 lg:px-10">
      <div className="flex justify-start items-start">
        <div>
          <p className="text-violet-600 font-bold text-xl">Projects</p>
          <h2 className="text-4xl font-bold mt-3">My Recent Work</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group overflow-hidden bg-[#0D0C19] rounded-2xl border border-border hover:border-violet-600/50 transition-all duration-300"
          >
            <div className="w-full h-62">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                src={project.images?.[0]}
                alt={project.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/ecommerce.png";
                }}
              />
            </div>

            <div className="p-5 mt-3">
              <div>
                <h2 className="text-2xl font-bold mt-3">{project.title}</h2>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies?.slice(0, 6).map((tech) => (
                    <p
                      key={tech}
                      className="px-3 py-1 rounded-full border border-border text-xs"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                  >
                    <MoveUpRight />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
