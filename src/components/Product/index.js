// Import Views
import ProductInListView from "./views/ProductInListView";
import ProductInModalView from "./views/ProductInModalView";
import ProductInCartView from "./views/ProductInCartView";

// Import Containers
import Container from "./Container";

export const ProductInCartConstructor = Container(ProductInCartView)
export const ProductInListConstructor = Container(ProductInListView)
export const ProductInModalConstructor = Container(ProductInModalView)
