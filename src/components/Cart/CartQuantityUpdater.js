import React, { useState } from "react";
import { connect } from "react-redux";
import changeCartQuantity from "../../state/actions/changeCartQuantity";

const Updater = ({ id, changeCartQuantity }) => {
    const [quantity, setQuantity] = useState()
    const handleChanges = e => {
        setQuantity(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        changeCartQuantity(id, quantity);
    }
    return (
        <div className="cart-quantity-updater">
            <input value={quantity} />
            <button onClick={handleSubmit} >Update Quantity</button>
        </div>
    )
};

const mapStateToProps = state => {
    return ({

    });
};

export default connect(mapStateToProps, { changeCartQuantity })(Updater)