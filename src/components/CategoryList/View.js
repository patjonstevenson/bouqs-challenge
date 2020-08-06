import React from "react";
import Category from "./Category";

export default ({ categories }) => {
    return (
        <div className="category-list">
            <h2>Categories</h2>
            {categories.map(c => <Category data={c} />)}
        </div>
    )
}