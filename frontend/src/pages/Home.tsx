import NavBar from "../components/NavBar";
import About from "../sections/about/About";
import Hero from "../sections/hero/Hero";
import Projects from "../sections/projects/Projects";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
