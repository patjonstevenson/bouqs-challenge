import {
    ADD_TO_CART_START,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    DELETE_FROM_CART_START,
    DELETE_FROM_CART_SUCCESS,
    DELETE_FROM_CART_FAILURE,
    CHANGE_CART_QUANTITY_START,
    CHANGE_CART_QUANTITY_SUCCESS,
    CHANGE_CART_QUANTITY_FAILURE,
} from "../actions/types";

const initialStore = {
    data: {},
    isUpdating: false,
    error: null
}

export default (state = initialStore, action) => {
    console.log("cartReducer running...");
    console.log("Action: ", action);
    console.log("state: ", state);
    switch (action.type) {
        case ADD_TO_CART_START:
            return {
                ...state,
                isUpdating: true,
            }
        case ADD_TO_CART_SUCCESS:
            if (state.data[action.payload.id]) {
                return {
                    ...state,
                    isUpdating: false,
                    data: {
                        ...state.data,
                        [action.payload.id]: {
                            ...state.data[action.payload.id],
                            quantity: state.data[action.payload.id].quantity + 1
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    isUpdating: false,
                    data: {
                        ...state.data,
                        [action.payload.id]: {
                            ...action.payload.product,
                            quantity: 1
                        }
                    }
                }
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

        case CHANGE_CART_QUANTITY_START:
            return {
                ...state,
                isUpdating: true
            }
        case CHANGE_CART_QUANTITY_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                data: {
                    ...state.data,
                    [action.payload.id]: {
                        ...state.data[action.payload.id],
                        quantity: action.payload.quantity
                    }
                }
            }
        case CHANGE_CART_QUANTITY_FAILURE:
            return {
                ...state,
                isUpdating: false,
                error: action.payload
            }


        default:
            return state;
    }
}