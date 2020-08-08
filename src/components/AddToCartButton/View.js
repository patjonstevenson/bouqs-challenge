import React from "react";

export default ({ data, addToCart }) => {
    const handleClick = e => {
        addToCart(data);
    }
    return (
        <div className="add-to-cart">
            <button onClick={handleClick}></button>
        </div>
    );
}