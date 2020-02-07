import React from 'react';
import './Projects.css';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects card">
        <h2>Projects</h2>
        <ul>
          <li className="card project">
            <a
              href="https://playspace.tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/K0WnJgX.jpg"
                alt="PlaySpace screenshot"
              />
              <div className="project__info">
                <h3>PlaySpace</h3>
                <span>April 2019 - Present</span>
                <p>
                  Over the last year, I have single handedly built a platform
                  for streaming games, watching videos, and chatting with
                  friends from the comfort of your web browser.
                </p>
              </div>
            </a>
          </li>
          <li className="card project">
            <a
              href="https://youtu.be/Rsst11LyNuY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/zYkZ7tF.jpg"
                alt="Fauna Lens screenshot"
              />
              <div className="project__info">
                <h3>San Diego Zoohackathon</h3>
                <span>November 8 - 10 2019</span>
                <p>
                  I participated in a hackathon with one other person on my
                  team. Our goal was to create a webapp that gamified the
                  collection of animal trafficking data. It was built in a Vue
                  front-end with Airtable as the database. We didn’t win, but I
                  did pull off my longest coding stretch of 7am - 1am that I am
                  very proud of.
                </p>
              </div>
            </a>
          </li>
          <li className="card project">
            <a
              href="https://2020.fashion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/2Ikzp6P.jpg"
                alt="MMXX Fashion screenshot"
              />
              <div className="project__info">
                <h3>MMXX Fashion</h3>
                <span>January 2020</span>
                <p>
                  -Designed a static landing page for my friends clothing brand
                  with vanilla HTML/CSS. -Created an email list sign up form
                  that submits to an airtable back-end via a webhook.
                </p>
              </div>
            </a>
          </li>
          <li className="card project">
            <a
              href="https://github.com/TrystonPerry/presentations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/HamH59b.jpg"
                alt="Tryston Perry's presentations screenshot"
              />
              <div className="project__info">
                <h3>My Presentations</h3>
                <span>June 2019 - Present</span>
                <p>
                  A collection of all the presentations / talks I've given at
                  local meetups or online.
                </p>
              </div>
            </a>
          </li>
          <li className="card project">
            <a
              href="https://boarditt.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/MEbEFam.jpg"
                alt="Boarditt screenshot"
              />
              <div className="project__info">
                <h3>Boarditt</h3>
                <span>September - October 2018</span>
                <p>
                  Boarditt is a simple, yet powerful Task Management WebApp. The
                  front-end is built with Angular 5 as a SPA. Using components
                  and services to neatly organize data handled from its back-end
                  API. The back-end uses Node.js, Express.js, and MongoDB to
                  form an API for accessing data like Boards, Lists, and Todos.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
