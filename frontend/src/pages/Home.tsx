import NavBar from "../components/NavBar";
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";
import Experience from "../sections/experience/Experience";
import Hero from "../sections/hero/Hero";
import Projects from "../sections/projects/Projects";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact/>
    </div>
  );
};

export default Home;
