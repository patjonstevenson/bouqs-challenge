import React from "react";

export default ({ data }) => {
    const dataLoaded = Boolean(data.variant)

    return dataLoaded
        ? (
            <div key={data.id} className="product-in-list">
                <img src={data.images[0].url} alt={data.image_alt_tags} />
                <h3>{data.name}</h3>
                <p>${Math.round(data.variant.prices.regular)}</p>
            </div>
        ) : null
}