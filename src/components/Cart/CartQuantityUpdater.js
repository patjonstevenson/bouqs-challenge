import React, { useState } from "react";
import { connect } from "react-redux";
import changeCartQuantity from "../../state/actions/changeCartQuantity";

const Updater = props => { //({ id, changeCartQuantity })
    const [quantity, setQuantity] = useState(props.data.quantity)
    const handleChanges = e => {
        setQuantity(e.target.value);
    }
    console.log("Props in CartQuantityUpdater: ", props);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Handle Submit in CartQuantityUpdater.");
        console.log("ID: ", props.data.variant.id);
        console.log("Quantity: ", quantity);
        props.changeCartQuantity(props.data.variant.id, quantity);
    }
    return (
        <div className="cart-quantity-updater">
            <input value={quantity} onChange={handleChanges} />
            <button onClick={handleSubmit} >Update Quantity</button>
        </div>
    )
};

const mapStateToProps = state => {
    return ({

    });
};

export default connect(mapStateToProps, { changeCartQuantity })(Updater)