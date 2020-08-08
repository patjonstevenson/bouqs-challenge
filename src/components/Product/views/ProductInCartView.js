import React from "react";
import CartQuantityUpdater from "../../Cart/CartQuantityUpdater";
import DeleteFromCartButtonConstructor from "../../DeleteFromCartButton/Container";
export default ({ data }) => {
    console.log("DATA in ProductInCartView: ", data);
    // const imageURL = data.images ? data.images[0].url : null;
    // const src = imageURL ? `${imageURL.slice(0, imageURL.length)}?t=${Date.now()}` : null;
    const DeleteFromCartButton = DeleteFromCartButtonConstructor(data.variant.id);
    return data
        ? (
            <div key={data.variant.id} className="product-in-cart">
                {/* src={data.images.url} before */}
                <img className="product-image-thumbnail" src={data.imageSrc} alt={data.image_alt_tags} />
                <h4>{data.name}</h4>
                <p>${Math.round(data.variant.prices.regular)}</p>
                <p>Quantity: {data.quantity}</p>
                <CartQuantityUpdater data={data} />
                <DeleteFromCartButton />
            </div>
        ) :
        <div className="loading-product-in-cart">
            <h3>LOADING PRODUCT...</h3>
        </div>
}