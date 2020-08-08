import React from "react";

export default cart => {
    console.log("Cart in OrderSummary: ", cart);
    const productIds = Object.keys(cart);
    const subtotal = productIds.reduce((sum, curr) =>
        sum + cart[curr].variant.prices.regular
    );
    return (
        <div className="order-summary">
            <span>SubTotal:</span><span>{subtotal}</span>
        </div>
    );
}