// Import Constructor
import assembler from "./assembler";

// Import Action Functions
import addToCart from "../../state/actions/addToCart";
import deleteFromCart from "../../state/actions/deleteFromCart";

// Import Views 
import ProductInCartView from "./views/ProductInCartView";
import ProductInListView from "./views/ProductInListView";
import ProductInModalView from "./views/ProductInModalView";


const ProductInCartConfig = {
    view: ProductInCartView,
    actionFns: [deleteFromCart]
}

// Export Product Components (id => <></>)
export const ProductInCart = assembler()