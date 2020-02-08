import React from "react";
import "./Talk.css";

import data from "./../../content.js";

export default class Talk extends React.Component {
  render() {
    const { talk } = data;

    return (
      <div className='talk card'>
        <h2>My Latest Tech Talk</h2>
        <div className='yt-wrapper'>
          <iframe
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${talk.youtubeVideoId}`}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Tryston Perrys Latest Talk'
          ></iframe>
        </div>
        <h3 className='talk__title'>{talk.title}</h3>
        <span className='talk__date'>{talk.date}</span>
        <p className='talk__desc'>{talk.description}</p>
        <a
          href='https://github.com/trystonperry/presentations'
          target='_blank'
          rel='noopener noreferrer'
        >
          See all of my talks
        </a>
      </div>
    );
  }
}
