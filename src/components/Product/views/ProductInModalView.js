import React from "react";
import AddToCartButtonConstructor from "../../AddToCartButton/Container";

export default ({ data, fns }) => {
    const [closeModal] = fns;
    const AddToCartButton = AddToCartButtonConstructor(data)

    return (
        <div key={data.id} className="product-in-modal">
            {data.imageSrc ? <img src={data.imageSrc} alt={data.image_alt_tags} /> : "LOADING IMAGE"}
            <div className="product-info-modal">
                <button onClick={closeModal}>X</button>
                <h2>{data.name}</h2>
                <p className="product-price">${Math.round(data.variant.prices.regular)}</p>
                <AddToCartButton />
                <h4>Description</h4>
                <p className="product-description">{data.description}</p>
                <h4>Manufacturer</h4>
                <p>Name: {data.manufacturer.name}</p>
                <p>Location: {data.manufacturer.location}</p>
            </div>
        </div>
    )
}