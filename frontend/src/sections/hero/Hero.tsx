import { MdEmail } from "react-icons/md";
import OrbitVisual from "../../components/OrbitVisuals";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
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
          <div className="mt-8 flex gap-14 px-3">
            <div className="px-2 py-2 rounded-full border-2">
              <FaGithub />
            </div>
            <div className="px-2 py-2 rounded-full border-2">
              <FaLinkedin />
            </div>
            <div className="px-2 py-2 rounded-full border-2">
              <MdEmail />
            </div>
          </div>
        </div>
        <div className="flex-1 mt-2">
          <div>
            <OrbitVisual />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
