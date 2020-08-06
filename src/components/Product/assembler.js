import React from "react";
import { connect } from "react-redux"

export default ({ View, actionFns = [] }) => id => {
    const mapStateToProps = state => {
        console.log("STATE IN MAPSTATETOPROPS in stateInjector: ", state);
        return ({
            data: state.products.find(p => p.id === id)//.data // I don't think the .data is necessary
        });
    }

    return connect(mapStateToProps, { ...actionFns })(
        props => <View data={props.data} actionFns={props.actionFns} />//{
        //         return (
        //             <div className="product-container">
        //                 <View
        //                     data={props.data}
        //                     actionFns={actionFns}
        //                 />
        //             </div>
        //         );
        //     }
    )
}