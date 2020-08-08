import React from "react";
import { connect } from "react-redux";

import View from "./View";
import deleteFromCart from "../../state/actions/deleteFromCart";

export default (data) => {
    console.log("data in deleteFromCartButton Container: ", data);

    const mapStateToProps = state => {
        return ({
            // id: id,
            // product
            id: data.variant.id
        });
    };


    return connect(mapStateToProps, { deleteFromCart })(View);
};