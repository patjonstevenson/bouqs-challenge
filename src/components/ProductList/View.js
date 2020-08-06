import React, { useEffect } from "react";
import ProductInList from "../Product/views/ProductInListView";

export default props => { // ({ products })
    console.log("props in ProductListView: ", props);
    console.log("Products in ProductListView: ", props.products);
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
                    ? props.products.map(p => <ProductInList key={p.id} data={p} />)
                    : null
            }
        </div>
    );
}