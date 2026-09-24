import { MdEmail } from "react-icons/md";
import OrbitVisual from "../../components/OrbitVisuals";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const contactIcons = [
    { icon: <FaGithub />, path: "https://github.com/abubakkar-dev-code" },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/abubakkar-a-a-692504267/",
    },
    { icon: <MdEmail />, path: "mailto:abubakkarm620@gmail.com" },
  ];
  return (
    <div className="mt-6">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-10 py-8 flex flex-col lg:flex lg:flex-row gap-10 lg:gap-4">
        <div className="lg:flex-[1.2] sm:flex sm:flex-col gap-3 min-w-0">
          <div className="py-2 px-8 border border-border w-fit rounded-full">
            <p className="font-semibold">✋ Hi,I'm</p>
          </div>
          <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl mt-6 ">
            ABU<span className="text-violet-600">BAKKAR</span>
          </h1>
          <h2 className="mt-6 font-semibold text-2xl sm:text-3xl">
            MERN Stack Developer
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-lg mt-6">
            I build sclable web applications with modern technologies with
            AI-powered solutions.
          </p>
          <div className="mt-10 flex flex-col sm:gap-6 sm:flex-row gap-4">
            <button className="whitespace-nowrap py-3 px-10 bg-violet-600 rounded-full font-semibold flex gap-4 items-center justify-center">
              View Projects<span className="text-xl"> →</span>
            </button>
            <button className="py-3 px-14 rounded-full font-semibold border-2 border-border flex items-center gap-4 justify-center">
              <span> ⤓ </span>Download Resume
            </button>
          </div>
          <div className="mt-9 flex gap-6 sm:gap-10 px-3">
            {contactIcons.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="px-2 py-2 rounded-full border-2"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:flex-[0.8] mt-16 lg:mt-14 min-w-0 flex justify-center lg:pl-6">
          <div className="w-full max-w-130">
            <OrbitVisual />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
