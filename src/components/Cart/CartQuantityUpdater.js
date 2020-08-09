import React, { useState } from "react";
import { connect } from "react-redux";
import changeCartQuantity from "../../state/actions/changeCartQuantity";
import deleteFromCart from "../../state/actions/deleteFromCart";

const Updater = props => {
    const [quantity, setQuantity] = useState(props.data.quantity)
    const [error, setError] = useState(null);
    const handleChanges = e => {
        setError(null)
        setQuantity(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const q = Number(quantity);

        if (q === 0) {
            props.deleteFromCart(props.data.variant.id);
        } else if (q < 0) {
            setError("Please enter a valid quantity.");
        } else {
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { changeCartQuantity, deleteFromCart })(Updater)