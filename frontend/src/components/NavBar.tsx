import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="flex justify-between w-full border-2 w-[90%]" >
        <div>
          <h1 className="font-extrabold">ABUBAKKAR</h1>
        </div>
        <div>
          <ul className="flex gap-16">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Skills</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Experience</Link>
            </li>
            <li>
              <Link to="/">Education</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <Moon />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
