import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';

export default class ProductCart extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>CART RENDERS</h1>
                    <div className="subtotal">
                        <p>Subtotal (# of items): $0.00</p>
                    </div>
                <Button className="checkout-btn">Checkout Emazon Cart</Button>
                <hr />
                <div id="products-in-cart">
                    <img src="https://media.gq-magazine.co.uk/photos/5dbc4d5a8da8f900083b9076/master/w_1000,c_limit/20191028-watch-guide-baume.jpg" width="110px" className="cart-product-img" alt=""/>
                    <div className="cart-product-details">
                        <ListGroup>
                            <ListGroup.Item>Product Name</ListGroup.Item>
                            <ListGroup.Item>$99.99</ListGroup.Item>
                            <ListGroup.Item>In Stock</ListGroup.Item>
                           <ListGroup.Item>Style:</ListGroup.Item>
                           <ListGroup.Item>Color:</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="items-in-cart"></div>
                </div>
                <div className="items-in-cart">
                    <div className="cart-update">
                        <form action="" id="cart-qty">
                            <Container>
                                <Row>
                                    <Button class="decrease-qty-btn">Delete or Subtract Item</Button> {/* On Amazon this button changes to a minus sign if qty > 1 */}
                                    <InputGroup id="quantity" name="quantity" type="text" className="qty-in-cart"></InputGroup>
                                    <Button className="increase-qty-btn">Add Item</Button>

                                        <Button className="delete-item-btn">Delete</Button>
                                        <Button className="save-item-btn">Save for Later</Button>
                                </Row>
                            </Container>
                        </form>
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}
