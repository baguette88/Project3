import React, { Component } from "react";
import NewForm from "./components/NewForm.js";

const baseURL = "http://localhost:3003";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.getProducts = this.getProducts.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.toggleCelebrated = this.toggleCelebrated.bind(this);
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

  toggleCelebrated(product) {
    fetch(baseURL + "/products/" + product._id, {
      method: "PUT",
      body: JSON.stringify({ celebrated: !product.celebrated }),
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
        copyProducts[findIndex].celebrated = resJson.celebrated;
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
        <h1>Products!</h1>
        <NewForm handleAddProduct={this.handleAddProduct} />
        <table>
          <tbody>
            {this.state.products.map((product) => {
              return (
                <tr>
                  <td
                    key={product._id}
                    onDoubleClick={() => this.toggleCelebrated(product)}
                    className={product.celebrated ? "celebrated" : null}
                  >
                    {" "}
                    {product.name}{" "}
                  </td>
                  <td onClick={() => this.deleteProduct(product._id)}>X</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
