import React from "react";
// import { ProductInList as Product } from "../components/Product";
import createProductList from "../components/ProductList/";
import Header from "../components/Header";

export default ({ props }) => {
    console.log("PROPS in CATEGORY: ", props);
    const { name } = props.match.params;
    const ProductList = createProductList(name)
    return (
        <div className="category-page">
            <Header />
            <ProductList />
        </div>
    );
}



// export default ({
//     category,
//     description,
//     products,
// }) => {
//     return (
//         <div className="category">
//             <div>
//                 <h2>{category}</h2>
//                 <p>{description}</p>
//             </div>
//             <div className="products">
//                 {products.map(product => <Product data={product} />)}
//             </div>

//         </div>
//     )
// };