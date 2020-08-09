import React, { PureComponent } from "react";
import { connect } from "react-redux";

import fetchData from "../../state/actions/fetchData";

export default View => slug => {
    const mapStateToProps = state => {
        console.log("Slug in mapStateToProps: ", slug);
        console.log("STATE in mapStateToProps in ProductList Container: ", state);
        console.log("STATE.PRODUCTS.PRODUCTSBYCATEGORY[slug] in mapStateToProps in ProductList Container: ", state.products.productsByCategory[slug]);
        return ({
            products: state.products.productsByCategory[slug]
        });
    }

    return connect(mapStateToProps, { fetchData })(View);
}