import React from "react";
import { connect } from "react-redux";

import { ProductInCartConstructor } from "../Product";

const mapStateToProps = state => {
    return ({
        cart: state.cart.data
    });
}
export default connect(mapStateToProps)(({ cart }) => {
    console.log("Cart in Cart Component: ", cart);
    return (
        <div className="cart-component">
            <h2>Cart</h2>
            {cart
                ? Object.keys(cart).map(p => {
                    const Product = ProductInCartConstructor(cart[p]);
                    return <Product />
                })
                : "Cart is empty!"
            }
        </div>
    );
})