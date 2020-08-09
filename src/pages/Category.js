import React from "react";
import createProductList from "../components/ProductList/";
import Header from "../components/Header";
import { connect } from "react-redux";
import BackButton from "../components/BackButton";

const CategoryPageView = (props) => {
    const { slug } = props.props.match.params;
    const ProductList = createProductList(slug);
    const name = props.slugToNameMap[slug];

    return (
        <div className="category-page">
            <Header />
            <BackButton path="/" />
            <h2>{name}</h2>
            <ProductList />
        </div>
    );
};

const mapStateToProps = state => ({
    slugToNameMap: state.categories.data.reduce((obj, curr) => ({ ...obj, [curr.slug]: curr.name }), {})
});

export default connect(mapStateToProps)(CategoryPageView);