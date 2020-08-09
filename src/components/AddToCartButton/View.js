import React from "react";
import { Link } from "react-router-dom";

export default ({ data, addToCart }) => {
    const handleClick = e => {
        addToCart({ ...data, id: data.variant.id });

    }
    return (
        <div className="add-to-cart">
            <Link to="/cart"><button onClick={handleClick}>Add to Cart</button></Link>
        </div>
    );
}