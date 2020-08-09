import {
    ADD_TO_CART_START,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
} from "./types";
import { ProductInCart } from "../../components/Product";

export default ({ id, ...product }) => dispatch => {
    dispatch({ type: ADD_TO_CART_START });
    try {
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: { id, product } });
    } catch (error) {
        dispatch({ type: ADD_TO_CART_FAILURE, payload: error });
    }
}