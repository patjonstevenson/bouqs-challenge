import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fetchData from "../state/actions/fetchData";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList/Container";

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { fetchData })(
    props => {
        useEffect(() => {
            props.fetchData();
        }, [props]);

        return (
            <div className="dashboard">
                <Header />
                <CategoryList />
            </div>
        );
    }
);