import React from "react";

export default ({ cart }) => {
    const productIds = Object.keys(cart);
    const subtotal = productIds.reduce((sum, curr) =>
        sum + cart[curr].variant.prices.regular * cart[curr].quantity
        , 0
    );
    return (
        <div className="order-summary">
            <span>SubTotal:</span><span>${subtotal}</span>
        </div>
    );
}