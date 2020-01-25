import React from 'react';
import './WorkExperience.css';

export default class Card extends React.Component {
  render() {
    return (
      <div class="work-experience card">
        <h2>Work Experience</h2>
        <ul className="work-experience__list">
          <li className="work-experience__list-item">
            <div class="work-item__title">
              <h3>Nanome Inc.</h3>
              <span>Front-End Developer</span>
              <a
                href="https://nanome.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <span className="work-item__time">March 2019 - January 2020</span>
            <ul class="work-item__duties">
              <li>
                Built new landing page designs in Figma, went through
                iterations, and implemented them in a Vue.js front-end.
              </li>
              <li>
                Improved enterprise sales pipeline by designing new landing
                pages from scratch https://home.nanome.ai/commercial.
              </li>
              <li>
                Optimized content to improve web page load times by up to 500%.
              </li>
              <li>
                Collaborated with co-workers in code review and pull requests.
              </li>
              <li>Stayed SEO and accessibility conscious.</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
