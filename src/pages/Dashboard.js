import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fetchData from "../state/actions/fetchData";
import Header from "../components/Header";

const mapStateToProps = state => ({

})
// ******
// THIS REALLY BELONGS IN A PRODUCT_LIST COMPONENT


export default connect(mapStateToProps, { fetchData })(
    props => {
        // const [data, setData] = useState();
        console.log("PROPS in Dashboard: ", props);
        useEffect(() => {
            props.fetchData();
            // (async () => {
            //     try {
            //         await props.fetchData();
            //     } catch (error) {
            //         console.log(error);
            //     }
            // })()
        }, [props]);

        return (
            <div className="dashboard">
                <Header />

            </div>
        );
    }
)