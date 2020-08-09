import axios from "axios";
import { BASE_URL } from "../../constants";
import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
} from "./types";
import { getProductsFromData, getCategoriesFromData, getProductsByCategoryFromData } from "../utils";

export default () => async dispatch => {
    dispatch({ type: FETCH_DATA_START });
    try {
        const data = await axios.get(`${BASE_URL}/categories`);
        const products = getProductsFromData(data.data);
        const productsByCategory = getProductsByCategoryFromData(data.data);
        const categories = getCategoriesFromData(data.data);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: { products, categories, productsByCategory } });
    } catch (error) {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error });
    }
}