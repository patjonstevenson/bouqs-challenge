import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div className="header">
            <h3>The Bouqs Co.</h3>
            <nav className="header-nav">
                <Link to='/'>Home</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    )
}