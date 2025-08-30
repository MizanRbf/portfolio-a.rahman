import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";

const HomePage = () => {
  return (
    <div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
