import {
    ADD_TO_CART_START,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    DELETE_FROM_CART_START,
    DELETE_FROM_CART_SUCCESS,
    DELETE_FROM_CART_FAILURE,
} from "../actions/types";

const initialStore = {
    data: [],
    isUpdating: false,
    error: null
}

export default (state = initialStore, action) => {
    switch (action.type) {
        case ADD_TO_CART_START:
            return {
                ...state,
                isUpdating: true,
            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                data: action.payload
            }
        case ADD_TO_CART_FAILURE:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
        case DELETE_FROM_CART_START:
            return {
                ...state,
                isUpdating: true,
            }
        case DELETE_FROM_CART_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                data: action.payload
            }
        case DELETE_FROM_CART_FAILURE:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }
        default:
            return state;
    }
}