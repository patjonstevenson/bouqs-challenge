import React from "react";

export default ({ cart }) => {
    console.log("Cart in OrderSummary: ", cart);
    const productIds = Object.keys(cart);
    console.log("productIds in OrderSummary: ", productIds);
    const subtotal = productIds.reduce((sum, curr) =>
        sum + cart[curr].variant.prices.regular * cart[curr].quantity
        , 0
    );
    console.log("Subtotal in OrderSumary: ", typeof subtotal);
    return (
        <div className="order-summary">
            <span>SubTotal:</span><span>${subtotal}</span>
        </div>
    );
}