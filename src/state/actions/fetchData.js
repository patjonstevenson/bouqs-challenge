import axios from "axios";
import { BASE_URL } from "../../constants";
import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from "./types";
import { getProductsFromData, getCategoriesFromData } from "../utils";

export default () => async dispatch => {
    console.log("INSIDE FETCHDATA");
    dispatch({ type: FETCH_DATA_START });
    try {
        console.log("RUNNING AXIOS.GET...");
        const data = await axios.get(`${BASE_URL}/categories`);
        // TODO: TESTING THIS BELOW
        const products = getProductsFromData(data.data);
        const categories = getCategoriesFromData(data.data);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: { products, categories } });
    } catch (error) {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error });
    }
}