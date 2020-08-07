import React from "react";
import { connect } from "react-redux";

import View from "./View";

const mapStateToProps = state => {
    console.log("state.categories in mapStateToProps in Categories Container: ", state.categories);
    return ({
        categories: state.categories.data ? state.categories.data : null
    });
};

export default connect(mapStateToProps)(View);