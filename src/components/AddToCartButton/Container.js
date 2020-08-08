import React from "react";
import { connect } from "react-redux";

import View from "./View";
import addToCart from "../../state/actions/addToCart";

export default (id) => {

    const callAddToCart = () => { addToCart(id); };

    const mapStateToProps = state => {
        return ({
            id: id
        });
    };


    return connect(mapStateToProps, { addToCart })(View);
};