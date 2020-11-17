import React, { Component } from 'react'

export default class ShoppingPage extends Component {
    render() {
        return (
            <div className="ShoppingPage">
                {/* Box for product details text */}
                <div className="">
                    {/*Should we use category = brand? */}
                    <div>
                        <p>Product Brand</p>
                        <p>Product Name</p>
                        <p>Product Description</p>
                        {/* add quantity to Product Schema */}
                        <p>Product Price</p>
                    </div>
                    <div>
                    <p>Product Review Stars</p>
                    </div>                 
                    <p>Image goes here</p>
                    {/* Vendor Buttons */}
                    <form>
                        <button>Edit</button>
                        <button>Delete</button>
                    </form>
                    {/* Customer Buttons */}
                    <form>
                        <button>Purchase</button>
                    </form>
                </div>
            </div>
        )
    }
}
