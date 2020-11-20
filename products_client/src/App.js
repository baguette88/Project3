import React, { Component } from "react";
import NewForm from "./components/NewForm.js";
import Header from "./components/Header.js";
import ShoppingPage from "./components/ShoppingPage";
import "./index.css";
import ProductGrid from "./components/ProductGrid.js";
import ProductCart from "./components/ProductCart.js";
console.log("App");
const baseURL = "http://localhost:3003";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.getProducts = this.getProducts.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.toggleinStock = this.toggleinStock.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  handleAddProduct(product) {
    this.setState({
      products: this.state.products.concat(product),
    });
  }

  getProducts() {
    fetch(baseURL + "/products")
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({
          products: parsedData,
        });
      });
  }

    // trying out a show method //
    showProduct(id) {
    fetch(baseURL + "/products/" + id, {
      method: "PUT",
    }).then((response) => {
      const copyProducts = [...this.state.products];
      const findIndex = this.state.products.findIndex(
        (product) => product._id === id
      );
      this.setState({
        product: copyProducts[findIndex]
      })
    })
  }

  toggleinStock(product) {
    fetch(baseURL + "/products/" + product._id, {
      method: "PUT",
      body: JSON.stringify({ inStock: !product.inStock }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        const copyProducts = [...this.state.products];
        const findIndex = this.state.products.findIndex(
          (product) => product._id === resJson._id
        );
        copyProducts[findIndex].inStock = resJson.inStock;
        this.setState({ products: copyProducts });
      });
  }

  deleteProduct(id) {
    fetch(baseURL + "/products/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.products.findIndex(
        (product) => product._id === id
      );
      const copyProducts = [...this.state.products];
      copyProducts.splice(findIndex, 1);
      this.setState({ products: copyProducts });
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <NewForm handleAddProduct={this.handleAddProduct} />

        {/* Displaying the product info */}
        <div className="productShow">
          {this.state.products.map((product) => {
            return (
              <div >
                <ul key={product._id}>
                  <li>
                    <h3>Product: {product.name}</h3>
                  </li>
                  <li>Price: ${product.price} </li>
                  <br />
                  <li>Image Link: {product.image}</li>
                  <br />
                  <li>Category: {product.category}</li>
                  <br />
                  <li>Subcategory: {product.subcategory}</li>
                  <br />
                  <li>Brand: {product.brand} </li>
                  <br />
                  <li> Description: {product.description}</li>
                  <br />
                  <li>Quantity: {product.quantity} </li>
                  <br />
                  <li>Tags: {product.tags}</li>
                  <br />
                  <button onClick={() => this.editProduct(product._id)}>EDIT</button>
                  <button onClick={() => this.deleteProduct(product._id)}>
                    DELETE
                  </button>
                </ul>
                <div>
                  <img src={product.image} width="300" alt="" onClick={() => this.showProduct(product._id)}></img>
                </div>
              </div>
            );
          })}
        </div>

        <ShoppingPage></ShoppingPage>
        <ProductGrid />
        <ProductCart />
      </div>
    );
  }
}
