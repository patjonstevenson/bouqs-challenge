import React, { useState } from "react";
import { ProductInListConstructor } from "../Product/";
import { ProductInModalConstructor } from "../Product/";

export default props => {
    const [productModal, setProductModal] = useState(null);

    const handleClick = p => e => {
        setProductModal(p.id);
    }

    function closeModal() {
        setProductModal(null);
    }

    return (
        <div className="product-list">
            {
                props.products && props.products.length
                    ? props.products.map(p => {
                        const ProductInList = ProductInListConstructor(p);
                        const ProductInListComponent = p => <button className="product-in-list-button" onClick={handleClick(p)}><ProductInList /></button>
                        const ProductInModalComponent = ProductInModalConstructor(p, [closeModal]);

                        return p.id
                            ? p.id === productModal ? ProductInModalComponent() : ProductInListComponent(p)
                            : null
                    })
                    : null
            }
        </div>
    );
}