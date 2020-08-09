import React from "react";
import { connect } from "react-redux";

import View from "./View";
import deleteFromCart from "../../state/actions/deleteFromCart";

export default (id) => {
    const mapStateToProps = state => {
        return ({ id });
    };


    return connect(mapStateToProps, { deleteFromCart })(View);
};