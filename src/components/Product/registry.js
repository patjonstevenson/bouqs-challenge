// Import Action Functions
import addToCart from "../../state/actions/addToCart";
import deleteFromCart from "../../state/actions/deleteFromCart";

// Import Views 
import ProductInCartView from "./views/ProductInCartView";
import ProductInListView from "./views/ProductInListView";
import ProductInModalView from "./views/ProductInModalView";


export const ProductInCartConfig = {
    View: ProductInCartView,
    actionFns: [deleteFromCart]
};
export const ProductInModalConfig = {
    View: ProductInModalView,
    actionFns: [addToCart]
};
export const ProductInListConfig = {
    View: ProductInListView,
    actionFns: [addToCart]
};