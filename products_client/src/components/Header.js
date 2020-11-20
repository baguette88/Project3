import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import '../index.css'



export default class Header extends Component {
  render() {
    return (

      

      <div className="navbarTop">
        <div className="ScreenTop"> </div>
        <div className="Banner">
          {" "}
          <Jumbotron>
            <h1 className="muted">E-Mazon</h1>
           <br />
          <span ClassName="logo">Logo</span>
          <i className="fa fa-shopping-cart"></i>
          <div className="navbar">
       
       <ListGroup horizontal className="list">
         
         <ListGroup.Item>Gift Cards</ListGroup.Item>
         <ListGroup.Item> Get Ultra</ListGroup.Item>
         <ListGroup.Item>Find a Gift</ListGroup.Item>
         <ListGroup.Item>Special Sales</ListGroup.Item>
         <ListGroup.Item>We are Hiring </ListGroup.Item>
       </ListGroup>
      
      
     </div>
          </Jumbotron>
        </div>
        <div className="SearchBar">
          <form onSubmit={this.handleSubmit}>
            <input type="search" name="search" placeholder="Search.."></input>
            <input type="submit" value="Search" />
            <i type="submit" className="fa fa-search"></i>
          </form>
        </div>
       
      </div>
    
    );
  }
}
