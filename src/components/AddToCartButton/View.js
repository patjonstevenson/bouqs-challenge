import React from "react";

export default ({ id, addToCart }) => {
    const handleClick = e => {
        addToCart(id);
    }
    return (
        <div className="add-to-cart">
            <button onClick={handleClick}></button>
        </div>
    );
}