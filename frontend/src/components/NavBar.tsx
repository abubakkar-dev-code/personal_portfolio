import { Menu, Moon, X, Sun } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Experience",
      path: "#experience",
    },
    {
      name: "Education",
      path: "#education",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  const [activeStatus, setActiveStatus] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const togggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("light");
  };
  return (
    <header>
      <nav className="flex px-6 lg:px-10 py-5  border-2 border-border rounded-lg w-11/12 mx-auto items-center">
        <div>
          <h1 className="font-extrabold text-xl">
            ABU<span className="text-violet-600">BAKKAR</span>
          </h1>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="hidden lg:flex gap-8">
            {links.map((link) => {
              const isActive = activeStatus === link.name.toLowerCase();
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setActiveStatus(link.name.toLowerCase())}
                    className={`transition-all duration-200 relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-violet-600 after:origin-bottom-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${isActive ? "text-violet-600 font-semibold" : "text-gray-600"}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-violet-600 rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          onClick={togggleTheme}
          className="px-2 py-2 rounded-full bg-gray-800 shrink-0 cursor-pointer"
        >
          {isDark ? <Moon /> : <Sun color="#FFFFFF"/>}
        </div>
        <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen?<X color="#ffffff" />:<Menu/>}
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden w-11/12 mx-auto rounded-lg border-2 border-border bg-secondary mt-2 p-5">
          <ul className="flex flex-col gap-6">
            {links.map((link) => {
              const isActive = activeStatus === link.name.toLowerCase();
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setActiveStatus(link.name.toLowerCase())}
                    className={`transition-all duration-200 relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-violet-600 after:origin-bottom-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${isActive ? "text-violet-600 font-semibold" : "text-gray-600"}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-violet-600 rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
