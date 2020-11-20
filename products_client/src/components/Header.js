import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'
// import '../index.css'



export default class Header extends Component {
  render() {
    return (

      

      <div className="navbarTop">
        <div className="ScreenTop"> </div>
        <div className="Banner">
        <ListGroup horizontal className="list">
         
         <ListGroup.Item>Gift Cards</ListGroup.Item>
         <ListGroup.Item> Get Ultra</ListGroup.Item>
         <ListGroup.Item>Find a Gift</ListGroup.Item>
         <ListGroup.Item>Special Sales</ListGroup.Item>
         <ListGroup.Item>We are Hiring </ListGroup.Item>
       </ListGroup>



       <Carousel className="carousel">
  <Carousel.Item >
    <img
      className="d-block w-100, d-block h-7"
      src="https://c4.wallpaperflare.com/wallpaper/457/443/825/lion-colorful-digital-art-animals-wallpaper-preview.jpg" 
      alt="First slide"
      fluid
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/422/203/755/black-cool-dark-laptop-background-wallpaper-preview.jpg"
      alt="Third slide"
      bsPrefix
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c4.wallpaperflare.com/wallpaper/31/105/276/retrowave-synthwave-neon-ultrawide-wallpaper-preview.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





























      
     
            <h1 >E-Mazon</h1>
           <br />
          <img ClassName="logo"  />
          <i className="fa fa-shopping-cart"></i>
          <div className="navbar">
       
    
      
     </div>
        
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
