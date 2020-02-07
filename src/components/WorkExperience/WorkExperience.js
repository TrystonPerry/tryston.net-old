import React from 'react';
import './WorkExperience.css';

import data from "./../../content.js" 

export default class Card extends React.Component {
  render() {
    const { work } = data

    function generateExperience() {
      return (
        work.map(item => {
          return (
            <li className="work-experience__list-item">
              <div className="work-item__title">
                <h3>{ item.company }</h3>
                <span>{ item.title }</span>
                <a
                  href={ item.website }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </div>
              <span className="work-item__time">
                { item.startDate } - { item.endDate }
              </span>
              <ul className="work-item__duties">
               { item.points.map(point => <li>{ point }</li>) }
              </ul>
            </li>
          )
        })
      )
    }

    return (
      <div className="work-experience card">
        <h2>Work Experience</h2>
        <ul className="work-experience__list">
          { generateExperience() }
        </ul>
      </div>
    );
  }
}
