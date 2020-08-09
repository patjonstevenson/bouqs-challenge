import React from "react";
// import { ProductInList as Product } from "../components/Product";
import createProductList from "../components/ProductList/";
import Header from "../components/Header";
import { connect } from "react-redux";

const CategoryPageView = (props) => {
    console.log("PROPS in CATEGORY: ", props);
    const { slug } = props.props.match.params;
    const ProductList = createProductList(slug);
    const name = props.slugToNameMap[slug];

    // const name = getNameFromSlug(slug);
    return (
        <div className="category-page">
            <Header />
            <h2>{name}</h2>
            <ProductList />
        </div>
    );
};

const mapStateToProps = state => {
    console.log("STATE inside CATEGORY mapStateToProps: ", state);
    return ({
        slugToNameMap: state.categories.data.reduce((obj, curr) => ({ ...obj, [curr.slug]: curr.name }), {})

        // state.categories.data.length
        //     ? state.categories.data.find(c => c.slug === slug).name
        //     : null
    });
};

export default connect(mapStateToProps)(CategoryPageView);



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