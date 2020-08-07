import React, { useState, useEffect } from "react";
import { ProductInListConstructor } from "../Product/";
import { ProductInModalConstructor } from "../Product/";

export default props => { // ({ products })
    console.log("props in ProductListView: ", props);
    console.log("Products in ProductListView: ", props.products);
    // const { component: ProductInList, viewSelector } = ProductInListConstructor()
    // useEffect(() => {
    //     if (!props.products) {
    //         props.fetchData();
    //     }
    //     console.log("props after fetch in ProductList container: ", props);
    // }, [props.products]);

    const [productModal, setProductModal] = useState();

    const handleClick = p => e => {
        console.log("Clicked on ", p);
        setProductModal(p.id);
    }

    return (
        <div className="product-list">
            {
                props.products && props.products.length
                    ? props.products.map(p => {
                        const ProductInList = ProductInListConstructor(p);
                        const ProductInListComponent = p => <div onClick={handleClick(p)}><ProductInList /></div>
                        const ProductInModalComponent = ProductInModalConstructor(p);
                        console.log(p);
                        console.log("productModal: ", productModal);
                        return p
                            ? p.id === productModal ? ProductInModalComponent(p) : ProductInListComponent(p)
                            : null
                    })
                    : null
            }
        </div>
    );
}