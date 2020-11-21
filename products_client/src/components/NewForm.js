import React, { Component } from "react";
// import FormControl from 'react-bootstrap';

const baseURL = "http://localhost:3003";

export default class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      image: "",
      category: "",
      subcategory: "",
      brand: "",
      description: "",
      inStock: true,
      quantity: "",
      tags: ""
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
      body: JSON.stringify({ 
        name: this.state.name,
        price: this.state.price,
        image: this.state.image,
        category: this.state.category,
        subcategory: this.state.subcategory,
        brand: this.state.brand,
        description: this.state.description,
        inStock: this.state.inStock,
        quantity: this.state.quantity,
        tags: this.state.tags
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
          price: "",
          image: "",
          category: "",
          subcategory: "",
          brand: "",
          description: "",
          inStock: true,
          quantity: "",
          tags: ""
        });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="add Product name"
              />
            </div>
          </div>
        <div className="form-group row">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="price"
              name="price"
              onChange={this.handleChange}
              value={this.state.price}
              placeholder="add a Price"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="image" className="col-sm-2 col-form-label">Image Link</label>
          <div class="col-sm-10">
            <input
              type="text"
              id="image"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
              placeholder="add an Image Link"
            />
          </div>
        </div>
       <div className="form-group row">
          <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
          <div class="col-sm-10">
            <input
              type="text"
              id="category"
              name="category"
              onChange={this.handleChange}
              value={this.state.category}
              placeholder="add Product's category"
            />
          </div>
       </div>
        <div className="form-group row">
          <label htmlFor="subcategory" className="col-sm-2 col-form-label">Subcategory</label>
          <div class="col-sm-10">
            <input
              type="text"
              id="subcategory"
              name="subcategory"
              onChange={this.handleChange}
              value={this.state.subcategory}
              placeholder="add Product's subcategory"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="brand" className="col-sm-2 col-form-label">Brand</label>
          <div class="col-sm-10">
            <input
              type="text"
              id="brand"
              name="brand"
              onChange={this.handleChange}
              value={this.state.brand}
              placeholder="add Product's brand"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
          <div class="col-sm-10">
            <input
              type="text"
              id="description"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              placeholder="add a Description"
            />
          </div>
        </div>
        {/* Will need to change into a checkbox */}
        <div className="form-group row">
          <label htmlFor="inStock" className="col-sm-2 col-form-label">Is this Product in Stock?</label>
          <div class="col-sm-10">
            <input
              type="text"
              id="inStock"
              name="inStock"
              onChange={this.handleChange}
              value={this.state.inStock}
              placeholder="True/False"
            />
          </div>
        </div>
        {/* Will need to set minimum to go no lower than 0 */}
        <div className="form-group row">
          <label htmlFor="quantity" className="col-sm-2 col-form-label">Quantity</label>
          <div class="col-sm-10">
            <input
              type="text"
              id="quantity"
              name="quantity"
              onChange={this.handleChange}
              value={this.state.quantity}
              placeholder="---"
            />
          </div>
        </div>

        {/* Should consider changing tags in schema type: Array; This may then cause this to need a different input type */}
        <div className="form-group row">
          <label htmlFor="tags" className="col-sm-2 col-form-label">Add tags</label>
          <div class="col-sm-10">
            <input
              type="text"
              id="tags"
              name="tags"
              onChange={this.handleChange}
              value={this.state.tags}
              placeholder="Add tags when searching"
            />
          </div>
 
        
        <div className="submit-btn">
          <input type="submit" value="Add Product" className="btn-primary" />
        </div>
        </div>
      </form>
    );
  }
}