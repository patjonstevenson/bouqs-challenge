import React from "react";

// Import Constructor
import assembler from "./assembler";

// Import Views
import ProductInListView from "./views/ProductInListView";
import ProductInModalView from "./views/ProductInModalView";
import ProductInCartView from "./views/ProductInCartView";

// Import Containers
import Container from "./Container";

import {
    ProductInCartConfig,
    ProductInListConfig,
    ProductInModalConfig
} from "./registry";



// export const ProductInList = data => <h3>ProductInList</h3>;
// Export Product Components (id => <></>)
export const ProductInCart = assembler(ProductInCartConfig);
export const ProductInCartConstructor = Container(ProductInCartView)//assembler(ProductInListConfig);


// This constructor takes data and returns a View Component with data filtered and passed in
export const ProductInListConstructor = Container(ProductInListView)//assembler(ProductInListConfig);

export const ProductInModal = assembler(ProductInModalConfig);
export const ProductInModalConstructor = Container(ProductInModalView)//assembler(ProductInListConfig);
