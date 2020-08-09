import { connect } from "react-redux";
import React from "react";

// FAILED EXPERIMENT

export const getNameFromSlug = slug => { //  connect())(({slug}) => );
    const mapStateToProps = state => {
        return ({
            name: state.categories.data
                ? state.categories.data.find(c => c.slug === slug).name
                : null
        });
    }

    const getNameFromProps = ({ name }) => {
        console.log("name inside getNameFromProps: ", name);
        return name;
    };

    const getNameFromStore = connect(mapStateToProps)(getNameFromProps);
    console.log("getNameFromStore: ", Object.keys(getNameFromStore));
    return getNameFromStore;
}