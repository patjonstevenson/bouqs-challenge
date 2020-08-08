import React, { useState, useEffect } from "react";
import { axiosWithHeaders as axios } from "../../../requests";
import AddToCartButtonConstructor from "../../AddToCartButton/Container";

export default ({ data }) => {
    console.log("In ProductInModalView! data: ", data);
    const variantName = data.variant.name || null;
    const imageURL = data.images ? data.images[0].url : null// data.images.find(i => i.option === variantName) || null;
    // So that we get different images from the same image generator link
    const src = imageURL ? `${imageURL.slice(0, imageURL.length)}?t=${Date.now()}` : null;
    console.log("src in ProductInModalView: ", src);

    const AddToCartButton = AddToCartButtonConstructor(data.id)

    return (
        <div key={data.id} className="product-in-modal">
            {imageURL ? <img src={src} alt={data.image_alt_tags} /> : "LOADING IMAGE"}
            <div className="product-info-modal">
                <h2>{data.name}</h2>
                <p className="product-price">${Math.round(data.variant.prices.regular)}</p>
                <AddToCartButton />
                {/* <button onClick={() => { console.log("Added to cart."); }}>Add to Cart</button> */}
                <h4>Description</h4>
                <p className="product-description">{data.description}</p>
                <h4>Manufacturer</h4>
                <p>Name: {data.manufacturer.name}</p>
                <p>Location: {data.manufacturer.location}</p>
            </div>
        </div>
    )
}