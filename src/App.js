import React from "react";
import "./App.css";

import Header from "./components/Header/Header.js";
import WorkExperience from "./components/WorkExperience/WorkExperience.js";
import Talk from "./components/Talk/Talk.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <WorkExperience />
        <Talk />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
