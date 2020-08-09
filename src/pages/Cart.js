import React from "react";

import Header from "../components/Header";
import Cart from "../components/Cart/";
import BackButton from "../components/BackButton";

export default () => {
    return (
        <div className="cart-page">
            <Header />
            <BackButton />
            <Cart />
        </div>
    )
}