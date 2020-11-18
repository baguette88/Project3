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
    event.preventDefault();
    fetch(baseURL + "/products", {
      method: "POST",
      body: JSON.stringify({ name: this.state.name }),
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
          placeHolder="add Product name"
        />{" "}
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={this.handleChange}
          value={this.state.price}
          placeHolder="add a Price"
        />{" "}
        <br />
        <label htmlFor="image">Image Link</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
          placeHolder="add an Image Link"
        />{" "}
        <br />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={this.handleChange}
          value={this.state.category}
          placeHolder="add Product's category"
        />{" "}
        <br />
        <label htmlFor="subcategory">Subcategory</label>
        <input
          type="text"
          id="subcategory"
          name="subcategory"
          onChange={this.handleChange}
          value={this.state.subcategory}
          placeHolder="add Product's subcategory"
        />{" "}
        <br />
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          onChange={this.handleChange}
          value={this.state.brand}
          placeHolder="add Product's brand"
        />{" "}
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
          placeHolder="add a Description"
        />{" "}
        <br />
        {/* Will need to change into a checkbox */}
        <label htmlFor="inStock">Is this Product in Stock?</label>
        <input
          type="text"
          id="inStock"
          name="inStock"
          onChange={this.handleChange}
          value={this.state.inStock}
          placeHolder="True/False"
        />{" "}
        <br />
        {/* Will need to set minimum to go no lower than 0 */}
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={this.handleChange}
          value={this.state.quantity}
          placeHolder="---"
        />{" "}
        <br />
        {/* Should consider changing tags in schema type: Array; This may then cause this to need a different input type */}
        <label htmlFor="tags">Add tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          onChange={this.handleChange}
          value={this.state.tags}
          placeHolder="Add tags when searching"
        />{" "}
        <br />
        
        <input type="submit" value="Add Product" />
      </form>
    );
  }
}
