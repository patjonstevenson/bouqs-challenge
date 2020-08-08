import React, { PureComponent } from "react";
import { connect } from "react-redux";

import fetchData from "../../state/actions/fetchData";

export default View => name => {
    // const categoryTo

    // const productSelector = categoryName => state => {
    //     return state.categories
    //         .find(c => c.name === categoryName)
    //         .products
    //         .reduce((acc, curr) => [
    //             ...acc,
    //             state.products.find(p => p.id === curr.id)
    //         ], [])
    // }
    const mapStateToProps = state => {
        console.log("Name in mapStateToProps: ", name);
        console.log("STATE in mapStateToProps in ProductList Container: ", state);
        console.log("STATE.PRODUCTS.PRODUCTSBYCATEGORY[name] in mapStateToProps in ProductList Container: ", state.products.productsByCategory[name]);
        return ({
            products: state.products.productsByCategory[name]
        });
    }

    return connect(mapStateToProps, { fetchData })(View);
}