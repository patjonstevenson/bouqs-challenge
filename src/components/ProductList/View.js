import React, { useEffect } from "react";
import { ProductInListConstructor } from "../Product/";

export default props => { // ({ products })
    console.log("props in ProductListView: ", props);
    console.log("Products in ProductListView: ", props.products);
    const ProductInList = ProductInListConstructor()
    // useEffect(() => {
    //     if (!props.products) {
    //         props.fetchData();
    //     }
    //     console.log("props after fetch in ProductList container: ", props);
    // }, [props.products]);
    return (
        <div className="product-list">
            {
                props.products
                    ? props.products.map(p => ProductInListConstructor(p))
                    : null
            }
        </div>
    );
}