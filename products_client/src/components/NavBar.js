import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        {" "}
        <ul>
          {" "}
          <li> Holiday Deals </li> |<li> Gift Cards </li> |<li> Get Ultra </li>{" "}
          |<li> Find a Gift </li> |<li> Special Sales </li> |
          <li> We are Hiring </li>
        </ul>{" "}
      </div>
    );
  }
}
