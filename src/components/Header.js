import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div className="header">
            <Link to='/'><h3>The Bouqs Co.</h3></Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}