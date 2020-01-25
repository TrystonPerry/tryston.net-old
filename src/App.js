import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import WorkExperience from './components/WorkExperience/WorkExperience.js';
import Projects from './components/Projects/Projects.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <WorkExperience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
