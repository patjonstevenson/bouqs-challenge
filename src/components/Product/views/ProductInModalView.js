import React, { useState, useEffect } from "react";
import { axiosWithHeaders as axios } from "../../../requests";
import AddToCartButtonConstructor from "../../AddToCartButton/Container";

export default ({ data, fns }) => {// ({ data }, closeModal) => {
    // const { closeModal, ...data } = props.data;
    // console.log("In ProductInModalView! props: ", props);
    console.log("In ProductInModalView! data: ", data);
    const [closeModal] = fns;
    console.log("In ProductInModalView! fns: ", fns);
    // const variantName = data.variant.name || null;
    // const imageURL = data.images ? data.images[0].url : null// data.images.find(i => i.option === variantName) || null;
    // So that we get different images from the same image generator link
    // const src = imageURL ? `${imageURL.slice(0, imageURL.length)}?t=${Date.now()}` : null;
    console.log("In ProductInModalView! data.src: ", data.src);

    const AddToCartButton = AddToCartButtonConstructor(data)

    return (
        <div key={data.id} className="product-in-modal">
            {data.imageSrc ? <img src={data.imageSrc} alt={data.image_alt_tags} /> : "LOADING IMAGE"}
            <div className="product-info-modal">
                <button onClick={closeModal}>X</button>
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