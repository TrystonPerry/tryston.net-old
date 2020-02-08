import React from "react";
import "./Header.css";

import ExternalLink from "./../misc/ExternalLink.js";
import Skills from "./Skills.js";

import data from "./../../content.js";

export default class Header extends React.Component {
  render() {
    const { header } = data;

    function createSocialLinks() {
      return header.social.map(social => (
        <ExternalLink key={social.text} social={social} />
      ));
    }

    return (
      <header className='header card'>
        <div className='header__content'>
          <div>
            <img
              src={header.info.headshotURL}
              alt='Headshot of Tryston Perry'
              className='header__headshot'
            />
            <h1 className='header__name'>{header.info.name}</h1>
            <h2 className='header__subline'>{header.info.title}</h2>
          </div>
          <h2 className='header__section-label'>About Me</h2>
          <span dangerouslySetInnerHTML={{ __html: header.info.about }}></span>
          <div className='header__spacer'></div>
          <div>
            <h2 className='header__section-label'>Social</h2>
            <ul className='header__social'>{createSocialLinks()}</ul>
            <div className='header__cta'>
              <a href={header.action.link} className='header__email-me'>
                {header.action.text}
              </a>
            </div>
          </div>
        </div>
        <div className='header__skills'>
          <h2 className='header__skills-text'>Skills</h2>
          <Skills skills={header.skills} />
        </div>
      </header>
    );
  }
}
