import React, { useState } from "react";
import { connect } from "react-redux";
import changeCartQuantity from "../../state/actions/changeCartQuantity";
import deleteFromCart from "../../state/actions/deleteFromCart";

const Updater = props => { //({ id, changeCartQuantity })
    const [quantity, setQuantity] = useState(props.data.quantity)
    const [error, setError] = useState(null);
    const handleChanges = e => {
        setError(null)
        setQuantity(e.target.value);
    }
    console.log("Props in CartQuantityUpdater: ", props);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Handle Submit in CartQuantityUpdater.");
        console.log("ID: ", props.data.variant.id);
        console.log("Quantity: ", quantity);
        const q = Number(quantity);
        console.log("Typeof quantity: ", typeof quantity);
        if (q === 0) {
            console.log("Deleting from cart...");
            props.deleteFromCart(props.data.variant.id);
        } else if (q < 0) {
            setError("Please enter a valid quantity.");
        } else {
            console.log("Changing cart quantity...");
            props.changeCartQuantity(props.data.variant.id, q);
        }
    }
    return (
        <div className="cart-quantity-updater">
            <div className="cart-quantity-updater-input">
                <form onSubmit={handleSubmit}>
                    <input type="number" min="0" value={quantity} onChange={handleChanges} />
                    <button type="submit"  >Update Quantity</button>
                </form>

            </div>
            <div className="error">
                <p>{error}</p>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return ({

    });
};

export default connect(mapStateToProps, { changeCartQuantity, deleteFromCart })(Updater)