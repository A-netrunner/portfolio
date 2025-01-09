import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center overflow-x-hidden relative">
        <Navbar />
        <div className="w-full">
          <section
            id="home"
            className="mb-16 mx-auto flex flex-col items-center justify-center"
          >
            <Home />
          </section>

          <section id="skills">
            <Skill />
          </section>

          <section id="projects">
            <Project />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
