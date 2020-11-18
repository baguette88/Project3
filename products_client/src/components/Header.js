import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="ScreenTop"> </div>
        <div className="Banner">
          {" "}
          E-Mazon <br />
          <span ClassName="logo">Logo</span>
        </div>
        <div className="SearchBar">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="search" placeholder="Search.."></input>
            <i class="fas fa-shopping-cart"></i>
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="navBar">
          {" "}
          <ul>
            {" "}
            <li> Holiday Deals </li> |<li> Gift Cards </li> |
            <li> Get Ultra </li> |<li> Find a Gift </li> |
            <li> Special Sales </li> |<li> We are Hiring </li>
          </ul>{" "}
        </div>
      </div>
    );
  }
}
