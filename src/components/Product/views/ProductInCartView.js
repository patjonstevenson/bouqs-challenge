import React from "react";

export default data => {
    return (
        <div key={data.id} className="product-in-cart">
            <img className="product-image-thumbnail" src={data.images.url} alt={data.image_alt_tags} />
            <h4>{data.name}</h4>
            <p>${Math.round(data.price)}</p>
        </div>
    )
}