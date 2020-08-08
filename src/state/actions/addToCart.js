import {
    ADD_TO_CART_START,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
} from "./types";

export default id => dispatch => {
    dispatch({ type: ADD_TO_CART_START });
    try {
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ type: ADD_TO_CART_FAILURE, payload: error });
    }
}