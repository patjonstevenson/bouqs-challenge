import { connect } from "react-redux";

import fetchData from "../../state/actions/fetchData";

export default View => slug => {
    const mapStateToProps = state => ({
        products: state.products.productsByCategory[slug]
    });

    return connect(mapStateToProps, { fetchData })(View);
}