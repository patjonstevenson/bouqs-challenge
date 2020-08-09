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

    const [productModal, setProductModal] = useState(null);

    const handleClick = p => e => {
        console.log("Clicked on ", p);
        setProductModal(p.id);
    }

    function closeModal() {
        console.log("Closing Modal!");
        setProductModal(null);
    }

    console.log("CloseModal: ", closeModal);

    return (
        <div className="product-list">
            {
                props.products && props.products.length
                    ? props.products.map(p => {
                        const ProductInList = ProductInListConstructor(p);
                        const ProductInListComponent = p => <button className="product-in-list-button" onClick={handleClick(p)}><ProductInList /></button>
                        const ProductInModalComponent = ProductInModalConstructor(p, [closeModal]);
                        console.log(p);
                        console.log("productModal: ", productModal);
                        console.log("closeModal in map: ", closeModal);
                        return p.id
                            ? p.id === productModal ? ProductInModalComponent() : ProductInListComponent(p)
                            : null
                    })
                    : null
            }
        </div>
    );
}