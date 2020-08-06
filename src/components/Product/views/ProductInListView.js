import React from "react";

export default ({ data }) => {
    console.log("Data in ProductInListView: ", data);
    
    return (
        <div key={data.id} className="product-in-list">
            {/* <img src={data.images.url} alt={data.image_alt_tags} /> */}
            <h3>{data.name}</h3>
            <p>${Math.round(data.price)}</p>
        </div>
    )
}