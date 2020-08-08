import {
    CHANGE_CART_QUANTITY_START,
    CHANGE_CART_QUANTITY_SUCCESS,
    CHANGE_CART_QUANTITY_FAILURE,
} from "./types";

export default (id, quantity) => dispatch => {
    dispatch({ type: CHANGE_CART_QUANTITY_START });
    try {
        dispatch({ type: CHANGE_CART_QUANTITY_SUCCESS, payload: { id, quantity } });
    } catch (error) {
        dispatch({ type: CHANGE_CART_QUANTITY_FAILURE, payload: error });
    }
}