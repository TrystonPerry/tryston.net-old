import React from "react"

export default class Skills extends React.Component {
  render() {
    const renderSkill = skillName => {
      return (
        <div>
          <h3>{ skillName }</h3>
          <ul className="header__skills-list">
            { this.props.skills[skillName].map(
              skill => 
                <li className="header__skills-item">{ skill }</li>
              )
            }
          </ul>
        </div>
      )
    }    

    return (
      <div>
        { Object.keys(this.props.skills).map(renderSkill) }
      </div>
    )
  }
}