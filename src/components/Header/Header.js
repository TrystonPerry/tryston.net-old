import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header class="header card">
        <div>
          <div>
            <img
              src="https://cdn1.oneprofile.info/users/avatars/230/large/edEc1d0C_400x400.jpg?1578343462"
              alt="Headshot of Tryston Perry"
              class="header__headshot"
            />
            <h1 class="header__name">Tryston Perry</h1>
            <h2 class="header__subline">Full Stack Developer</h2>
          </div>
          <h2 class="header__section-label">About Me</h2>
          <span>
            Hey{' '}
            <span role="img" aria-label="Wave hand">
              👋
            </span>
            , I'm Tryston! <br />
            <br /> I enjoy programming, talking, and reading. <br />
            <br /> For the last year, I've been building a website for streaming
            games, watching videos, and chatting with friends called PlaySpace.{' '}
            <br />
            <br /> I also enjoy giving talks at local San Diego meetups. <br />
            <br />
            If you're interested in speaking with me,{' '}
            <a href="mailto:tryston@trystonperry.com">shoot me an email!</a>
          </span>

          <h2 class="header__section-label">Social</h2>
          <ul class="header__social">
            <li class="header__social-item">
              <a
                href="https://github.com/trystonperry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li class="header__social-item">
              <a
                href="https://linkedin.com/in/trystonperry"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li class="header__social-item">
              <a
                href="https://twitter.com/trystonperry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li class="header__social-item">
              <a
                href="https://medium.com/@trystonperry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </li>
          </ul>
          <div class="header__cta">
            <a href="mailto:tryston@trystonperry.com" class="header__email-me">
              Email Me
            </a>
          </div>
        </div>
        <div class="header__skills">
          <h2 className="header__skills-text">Skills</h2>
          <h3>Front-End</h3>
          <ul class="header__skills-list">
            <li class="header__skills-item">HTML,</li>
            <li class="header__skills-item">CSS,</li>
            <li class="header__skills-item">SCSS,</li>
            <li class="header__skills-item">JavaScript,</li>
            <li class="header__skills-item">React,</li>
            <li class="header__skills-item">Vue,</li>
            <li class="header__skills-item">Angular,</li>
            <li class="header__skills-item">WebRTC,</li>
            <li class="header__skills-item">Bootstrap 4,</li>
            <li class="header__skills-item">TailwindCSS</li>
          </ul>
          <h3>Back-End</h3>
          <ul class="header__skills-list">
            <li class="header__skills-item">Node.js,</li>
            <li class="header__skills-item">Express.js,</li>
            <li class="header__skills-item">Socket.io,</li>
            <li class="header__skills-item">MongoDB,</li>
            <li class="header__skills-item">MySQL</li>
          </ul>
          <h3>DevOps</h3>
          <ul class="header__skills-list">
            <li class="header__skills-item">AWS,</li>
            <li class="header__skills-item">Digial Ocean,</li>
            <li class="header__skills-item">PM2,</li>
            <li class="header__skills-item">CI,</li>
            <li class="header__skills-item">Git,</li>
            <li class="header__skills-item">Bash & SSH</li>
          </ul>
          <h3>Design</h3>
          <ul class="header__skills-list">
            <li class="header__skills-item">Adobe Photoshop,</li>
            <li class="header__skills-item">Figma,</li>
            <li class="header__skills-item">Adobe Illustrator</li>
          </ul>
          <h3>Other</h3>
          <ul class="header__skills-list">
            <li class="header__skills-item">Agile Development,</li>
            <li class="header__skills-item">Unit Testing</li>
            <li class="header__skills-item">Pair/Mob programming</li>
          </ul>
        </div>
      </header>
    );
  }
}
