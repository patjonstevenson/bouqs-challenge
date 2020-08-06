import React from "react";

export default ({ data }) => {
    console.log("Data in ProductInListView: ", data);
    const dataLoaded = Boolean(data.variant)
    console.log("DATALOADED in ProductInListView: ", dataLoaded);


    return dataLoaded
        ? (
            <div key={data.id} className="product-in-list">
                {/* <img src={data.images.url} alt={data.image_alt_tags} /> */}
                <h3>{data.name}</h3>
                <p>${Math.round(data.variant.prices.regular)}</p>
            </div>
        ) : null
}