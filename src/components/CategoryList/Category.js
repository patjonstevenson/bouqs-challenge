import React from "react";
import { useHistory, Link } from "react-router-dom";

export default ({ data }) => {
    const history = useHistory()
    return (
        <div className="category-in-list">
            {/* NEED TO GET CATEGORY IMAGE SET UP */}
            {/* <img className="category-in-list-image" src={data} /> */}
            {/* <button onClick={() => history.push(`/category/${data.slug}`)}> */}
            
            <Link to={`/category/${data.slug}`}><h3>{data.name}</h3></Link>

            {/* </button> */}
        </div>
    )
}