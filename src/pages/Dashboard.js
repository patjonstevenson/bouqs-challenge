import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchData from "../state/actions/fetchData";
import Header from "../components/Header";

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { fetchData })(
    (props) => {
        useEffect(async () => {
            try {
                await props.fetchData();
            } catch (error) {
                console.log(error);
            }

        }, [props.fetchData])
        return (
            <div className="dashboard">
                <Header />
            </div>
        );
    }
)