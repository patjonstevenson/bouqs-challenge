import React from "react";
import { connect } from "react-redux";

import View from "./View";
import addToCart from "../../state/actions/addToCart";

export default (data) => {
    const mapStateToProps = state => ({
        data
    });

    return connect(mapStateToProps, { addToCart })(View);
};