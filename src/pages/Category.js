import React from "react";
import { ProductInList as Product } from "../components/Product";

export default ({ match }) => {
    const { name } = match.params;
    

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