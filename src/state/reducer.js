import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";

export default combineReducers({
    cart: cartReducer,
    categories: categoryReducer,
    products: productReducer
})