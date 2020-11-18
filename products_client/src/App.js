import React, { Component } from "react";
import NewForm from "./components/NewForm.js";
//import ProductBox from "./components/ProductBox.js";

import Header from "./components/Header.js";
import ShoppingPage from "./components/ShoppingPage";
import "./index.css";
import Login from "./components/Login.js";

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
        <table>
          <tbody>
            {this.state.products.map((product) => {
              return (
                <tr>
                  <td
                    key={product._id}
                    onDoubleClick={() => this.toggleinStock(product)}
                    className={product.inStock ? "In Stock" : null}
                  >
                    {" "}
                    {product.name} |{product.category}|{product.subcategory}
                    <br /> |{product.description} <br />
                  </td>
                  <td> {product.price} </td>
                  <td> {product.inStock} </td>
                  <button>
                    {" "}
                    <td onClick={() => this.deleteProduct(product._id)}>
                      DELETE
                    </td>{" "}
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ShoppingPage></ShoppingPage>
      </div>
    );
  }
}
