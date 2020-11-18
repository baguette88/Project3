import React, { Component } from 'react'

export default class ProductGrid extends Component {
    render() {
        return (
            <div id="product-grid">
            {/* wrap this in some loop that produces additional div*/}
            <img alt='' />
            <button className="view-product-btn">View</button>{/* button positioned at higher z-index than image*/}
               <ul>
                    <li>Product Brand</li>
                    <li>Product Name</li>
                    <li>Price</li>
               </ul>
            </div>
        )
    }
}
