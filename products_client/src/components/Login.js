import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return <div className="ProductBox">
      <h1>Welcom To E-mazon</h1>
        <form className="">
            <label>Username: <input class="dark-input"></input></label> <br />
            <label>Password: <input class="dark-input"></input></label> <br />
            <button className="btn-login" type="submit">Login</button>

        </form>
    </div>;

  }
}

