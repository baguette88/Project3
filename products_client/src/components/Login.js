import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return <div className="ProductBox">
      <h1>Welcom To Emazon</h1>
        <form>
            <lebal>Username: <input class="input"></input></lebal>
            <lebal>Password: <input class="input"></input></lebal>
            <button className="btn login" type="submit">Login</button>

        </form>
    </div>;

  }
}

