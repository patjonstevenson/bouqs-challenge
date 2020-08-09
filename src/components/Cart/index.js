import React from "react";
import { connect } from "react-redux";

import { ProductInCartConstructor } from "../Product";
import OrderSummary from "./OrderSummary";

const mapStateToProps = state => {
    return ({
        cart: state.cart.data
    });
}
export default connect(mapStateToProps)(({ cart }) => {
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
            <OrderSummary cart={cart} />
        </div>
    );
})