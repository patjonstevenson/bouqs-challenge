import React from "react";
import { withLowestPriceVariant } from "./utils";

export default View => (data, fns = []) => {
    return () => <View data={withLowestPriceVariant(data)} fns={fns} />
}