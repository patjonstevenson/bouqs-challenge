import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from "../actions/types";

const initialStore = {
    data: [],
    isFetching: false,
    error: null
}

export default (state = initialStore, action) => {
    console.log("categoryReducer running.");
    console.log("Action: ", action);
    console.log("State: ", state);
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.categories
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}