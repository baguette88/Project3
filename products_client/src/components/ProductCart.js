import React, { Component } from 'react'

export default class ProductCart extends Component {
    render() {
        return (
            <div>
                <div className="subtotal"><p>Subtotal (# of items): $0.00</p> </div>
                <button className="checkout-btn">Checkout Emazon Cart</button>
                <hr />
                <div id="products-in-cart">
                    <img className="cart-product-img" alt=""/>
                    <div className="cart-product-details">
                        <ul>
                            <li className="product-name">Product Name</li>
                            <li className="product-price">$99.99</li>
                            <li className="product-in-stock">In Stock </li> {/* Boolean */}
                            <li className="product-style">Style: </li>
                            <li className="product-color">Color: </li>
                        </ul>
                    </div>
                    <div className="items-in-cart"></div>
                </div>
                <div className="items-in-cart">
                    <div className="cart-update">
                        <form action="" id="cart-qty">
                            <button class="decrease-qty-btn"></button>
                            <input type="text" />
                            <button className="increase-qty-btn"></button>
                            <button className="delete-item-btn"></button>
                            <button className="save-item-btn"></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
