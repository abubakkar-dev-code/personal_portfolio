import { CalendarDays } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      role: "MERN Stack Developer",
      company: "Yoho Technologies Pvt. Ltd.",
      duration: "May 2024 - June 2025",
      responsibilities: [
        "Developed and maintained full-stack web applications using React, Node.js, Express.js, and MongoDB.",
        "Collaborated with team members to design, develop, and implement new application features.",
        "Built responsive and user-friendly interfaces using React, HTML, CSS, and JavaScript.",
        "Developed and integrated RESTful APIs for frontend and backend communication.",
        "Worked with Git and GitHub for version control and collaborative development.",
      ],
    },
  ];
  return (
    <section className="lg:px-10">
      <div className="w-11/12 max-w-7xl mx-auto mt-16">
        <div>
          <p className="text-violet-600 font-bold text-xl">Experience</p>

          <h1 className="font-bold text-4xl mt-3">My Professional Journey</h1>
        </div>
        <div className="mt-10">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-[#0D0C19] border border-border rounded-2xl px-6 py-6 md:px-8 md:py-7 hover:border-violet-600/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                <div>
                  <h2 className="text-2xl font-bold">{exp.role}</h2>

                  <p className="text-violet-600 font-medium mt-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <CalendarDays size={17} />
                  <span>{exp.duration}</span>
                </div>
              </div>
              <div className="mt-6">
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-text-secondary text-sm leading-relaxed"
                    >
                      <span className="text-violet-600 mt-2 h-1.5 w-1.5 rounded-full bg-violet-600 shrink-0"></span>
                      <p>{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
