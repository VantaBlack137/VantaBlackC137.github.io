import React from "react";
import "./Cards.css";

export class Cards extends React.Component {
  render() {
    return (
      <div className="Cards">
        <div id="box">
          <h1 id="center">{this.props.name}</h1>
        </div>
        <p id="text">{this.props.text}</p>
      </div>
    );
  }
}
