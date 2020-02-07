import React from "react"

export default class ExternalLink extends React.Component {
  render() {
    return (
      <li key={ this.props.social.text } className="header__social-item">
        <a
          href={ this.props.social.link }
          target="_blank"
          rel="noopener noreferrer"
        >
          { this.props.social.text }
        </a>
      </li>
    )
  }
}