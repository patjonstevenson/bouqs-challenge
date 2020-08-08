import React from "react";
import { Link } from "react-router-dom";

export default ({ id, deleteFromCart }) => {
    const handleClick = e => {
        deleteFromCart(id);

    }
    return (
        <div className="add-to-cart">
            <Link to="/cart"><button onClick={handleClick}>X</button></Link>
        </div>
    );
}