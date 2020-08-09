import {
    DELETE_FROM_CART_START,
    DELETE_FROM_CART_SUCCESS,
    DELETE_FROM_CART_FAILURE,
} from "./types";

export default id => dispatch => {
    dispatch({ type: DELETE_FROM_CART_START });
    try {
        dispatch({ type: DELETE_FROM_CART_SUCCESS, payload: { id } });
    } catch (error) {
        dispatch({ type: DELETE_FROM_CART_FAILURE, payload: error });
    }
}