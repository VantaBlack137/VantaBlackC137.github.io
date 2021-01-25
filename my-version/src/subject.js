import React from "react";
import "./subject.css";
import { Link } from "react-router-dom";

export class Subject extends React.Component {
  render() {
    return (
      <div className="Subject-div">
        <Link to={this.props.link} className="lectie_link">
          <div
            id="subjects"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img id="sbj-img" src={this.props.img} alt={this.props.alt} />
            <h1 id="sbj-title">{this.props.title}</h1>
          </div>
        </Link>
      </div>
    );
  }
}
