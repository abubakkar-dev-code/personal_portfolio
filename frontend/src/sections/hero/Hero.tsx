import { MdEmail } from "react-icons/md";
import OrbitVisual from "../../components/OrbitVisuals";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Moon } from "lucide-react";

const Hero = () => {
  const contactIcons = [
    { icon: <FaGithub />, path: "https://github.com/abubakkar-dev-code" },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/abubakkar-a-a-692504267/",
    },
    { icon: <MdEmail />, path: "abubakkarm620@gmail.com" },
  ];
  return (
    <div className="mt-14">
      <div className="w-11/12 mx-auto px-14 py-8 flex flex-col lg:flex lg:flex-row">
        <div className="flex-1">
          <div className="py-2 px-8 border border-border w-fit rounded-full">
            <p className="font-semibold">✋ Hi,I'm</p>
          </div>
          <h1 className="font-extrabold text-8xl mt-6">
            ABU<span className="text-violet-600">BAKKAR</span>
          </h1>
          <h2 className="mt-6 font-semibold text-3xl">MERN Stack Developer</h2>
          <p className="text-text-secondary text-lg mt-6">
            I build sclable web applications with modern
            <br />
            technologies with AI-powered solutions.
          </p>
          <div className="mt-10 flex gap-6">
            <button className="py-3 px-10 bg-violet-600 rounded-full font-semibold flex gap-4 items-center">
              View Projects<span className="text-xl"> →</span>
            </button>
            <button className="py-3 px-14 rounded-full font-semibold border-3 border-border flex items-center gap-4">
              <span> ⤓ </span>Download
            </button>
          </div>
          <div className="mt-9 flex gap-10 px-3">
            {contactIcons.map((item) => (
              <a href={item.path} className="px-2 py-2 rounded-full border-2">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 mt-1">
          <div>
            <OrbitVisual />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
