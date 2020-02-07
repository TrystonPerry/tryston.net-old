import React from 'react';
import './Projects.css';

import data from "./../../content.js"

export default class Projects extends React.Component {
  
  render() {
    const { projects } = data

    return (
      <div className="projects card">
        <h2>Projects</h2>
        <ul>
          { projects.map(project => {
            return (
              <li key={project.name} className="card project">
                <a
                  href={ project.link }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ project.imageURL }
                    alt={ `${project.name} screenshot` }
                  />
                  <div className="project__info">
                  <h3>{ project.name }</h3>
                    <span>
                      { project.startDate }
                      { project.endDate ? project.endDate : "" }
                    </span>
                  <p>{ project.description }</p>
                  </div>
                </a>
              </li>
              )
            }) 
          }
        </ul>
      </div>
    );
  }
}
