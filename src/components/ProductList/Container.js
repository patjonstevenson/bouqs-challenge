import React, { PureComponent } from "react";
import { connect } from "react-redux";
import View from "./View";

export default name => {
    // const categoryTo

    const productSelector = categoryName => state => {
        return state.categories
            .find(c => c.name === categoryName)
            .products
            .reduce((acc, curr) => [
                ...acc,
                state.products.find(p => p.id === curr.id)
            ], [])
    }

    const mapStateToProps = state => ({
        products: productSelector(name)(state)
    })

    return connect(mapStateToProps)(View);
}