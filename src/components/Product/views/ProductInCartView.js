import React from "react";
import CartQuantityUpdater from "../../Cart/CartQuantityUpdater";
import DeleteFromCartButtonConstructor from "../../DeleteFromCartButton/Container";

export default ({ data }) => {
    const DeleteFromCartButton = DeleteFromCartButtonConstructor(data.variant.id);
    return data
        ? (
            <div key={data.variant.id} className="product-in-cart">
                <div className="image-and-name">
                    <img className="product-image-thumbnail" src={data.imageSrc} alt={data.image_alt_tags} />
                    <h4>{data.name}</h4>
                </div>
                <div className="price-and-buttons">
                    <p>${Math.round(data.variant.prices.regular)}</p>
                    <CartQuantityUpdater data={data} />
                    <DeleteFromCartButton />
                </div>

            </div>
        ) :
        <div className="loading-product-in-cart">
            <h3>LOADING PRODUCT...</h3>
        </div>
}