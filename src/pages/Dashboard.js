import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fetchData from "../state/actions/fetchData";
import Header from "../components/Header";
// import axios from "axios";

const mapStateToProps = state => ({

})
// ******
// THIS REALLY BELONGS IN A PRODUCT_LIST COMPONENT


export default connect(mapStateToProps, { fetchData })(
    props => {
        // const [data, setData] = useState();
        console.log("PROPS in Dashboard: ", typeof props);
        useEffect(() => {
            (async () => {
                try {
                    await props.fetchData();
                    // const d = await axios.get('http://localhost:8081/api/categories');
                    // setData(d.data);
                    // console.log("DATA in useEffect: ", data); // DATA WAS HERE
                } catch (error) {
                    console.log(error);
                }
            })()
        }, [props]);

        return (
            <div className="dashboard">
                <Header />

            </div>
        );
    }
)