// Import Constructor
import assembler from "./assembler";

import {
    ProductInCartConfig,
    ProductInListConfig,
    ProductInModalConfig
} from "./registry";


// export const ProductInList = data => <h3>ProductInList</h3>;
// Export Product Components (id => <></>)
export const ProductInCart = assembler(ProductInCartConfig);
export const ProductInList = assembler(ProductInListConfig);
export const ProductInModal = assembler(ProductInModalConfig);