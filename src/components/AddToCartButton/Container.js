import React from "react";
import { connect } from "react-redux";

import View from "./View";
import addToCart from "../../state/actions/addToCart";

export default (data) => {
    console.log("data in AddToCartButton Container: ", data);
    const callAddToCart = () => { addToCart(data); };

    const mapStateToProps = state => {
        return ({
            // id: id,
            // product
            data: data
        });
    };


    return connect(mapStateToProps, { addToCart })(View);
};