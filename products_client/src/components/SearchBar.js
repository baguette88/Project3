import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" placeholder="Search.."></input>

          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
