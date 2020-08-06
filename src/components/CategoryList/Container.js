import React from "react";
import { connect } from "react-redux";

import View from "./View";

const mapStateToProps = state => ({
    categories: state.categories.data
});

export default connect(mapStateToProps)(View);