import React from "react";
import { Link } from "react-router-dom";

export default ({ data }) => {
    return (
        <div className="category-in-list">
            <Link to={`/category/${data.slug}`}><h3>{data.name}</h3></Link>
        </div>
    )
}