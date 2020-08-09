import React from "react";
import { connect } from "react-redux";

import View from "./View";

const mapStateToProps = state => {
    return ({
        categories: state.categories.data ? state.categories.data : null
    });
};

export default connect(mapStateToProps)(View);