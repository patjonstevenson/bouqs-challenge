import React from "react";

export default data => {
    return (
        <div key={data.id} className="product-in-modal">
            <img src={data.images.url} alt={data.image_alt_tags} />
            <div className="product-info-modal">
                <h2>{data.name}</h2>
                <p className="product-price">${Math.round(data.price)}</p>
                <button onClick={() => { console.log("Added to cart."); }}>Add to Cart</button>
                <h4>Description</h4>
                <p className="product-description">{data.description}</p>
                <h4>Manufacturer</h4>
                <p>Name: {data.manufacturer.name}</p>
                <p>Location: {data.manufacturer.location}</p>
            </div>
        </div>
    )
}