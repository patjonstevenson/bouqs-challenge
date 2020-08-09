import React from "react";
import { connect } from "react-redux";

import View from "./View";
import deleteFromCart from "../../state/actions/deleteFromCart";

export default (id) => {
    console.log("data in deleteFromCartButton Container: ", id);

    const mapStateToProps = state => {
        return ({
            // id: id,
            // product
            id
        });
    };


    return connect(mapStateToProps, { deleteFromCart })(View);
};