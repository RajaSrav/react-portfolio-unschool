import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import RecommendationSection from "./components/RecommendationSection";
import SkillSection from "./components/SkillSection";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Title />

      <RecommendationSection />
      <SkillSection />
      <ProjectSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
