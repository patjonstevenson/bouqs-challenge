import React from "react";
import { Link } from "react-router-dom";

export default ({ id, deleteFromCart }) => {
    const handleClick = e => {
        e.preventDefault();
        console.log("ID before deleteFromCart is called in View: ", id);
        deleteFromCart(id);

    }
    return (
        <div className="delete-from-cart">
            <Link to="/cart"><button onClick={handleClick}>X</button></Link>
        </div>
    );
}