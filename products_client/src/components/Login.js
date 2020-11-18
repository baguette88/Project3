import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return <div className="ProductBox">
      <h1>Welcom To Emazon</h1>
        <form>
            <label>Username: <input class="input"></input></label> <br>
            <label>Password: <input class="input"></input></label> <br>
            <button className="btn-login" type="submit">Login</button>

        </form>
    </div>;

  }
}

