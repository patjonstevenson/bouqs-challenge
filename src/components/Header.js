import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div className="header">
            <h3>The Bouqs Co.</h3>
            <Link to="/cart">Cart</Link>
        </div>
    )
}