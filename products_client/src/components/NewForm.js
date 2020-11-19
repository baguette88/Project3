import React, { Component } from "react";

const baseURL = "http://localhost:3003";

export default class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    // const pkg = {}
    event.preventDefault();
    fetch(baseURL + "/products", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        category: this.state.category,
        price: this.state.price,
        description: this.state.description,
        subcategory: this.state.subcategory,
        image: this.state.image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.handleAddProduct(data);
        this.setState({
          name: "",
        });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeHolder="add a Product"
        />{" "}
        <br />
        {/* Bug: Prices revert to default value */}
        <label htmlFor="name">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
          placeHolder="add a Price"
        />{" "}
        <br />
        <label htmlFor="name">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
          placeHolder="add a Description"
        />{" "}
        <br />
        <label htmlFor="name">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
          placeHolder="add an image"
        />{" "}
        <br />
        <label htmlFor="name">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={this.handleChange}
          value={this.state.category}
          placeHolder="add a Category"
        />{" "}
        <br />
        <label htmlFor="name">Sub-Category</label>
        <input
          type="text"
          id="subcategory"
          name="subcategory"
          onChange={this.handleChange}
          value={this.state.subcategory}
          placeHolder="add a Sub-Category"
        />{" "}
        <br />
        <input type="submit" value="Add Product" />
      </form>
    );
  }
}
