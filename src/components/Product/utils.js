const getLowestPriceVariant = variants => {
    console.log("IN GETLOWEST; !! typeof variants = ", typeof variants);
    const variant = variants.length
        ? variants.reduce((acc, curr) => {
            return curr.prices.regular < acc.prices.regular ? curr : acc
        })
        // ((va, vb) =>
        //     va.prices.regular > vb.prices.regular ? 1 : -1)[0]
        : variants
    console.log("VARIANT in getLowestPriceVariant: ", variant);
    return variant;
};

// product object -> product object with variant instead of variants
export const withLowestPriceVariant = data => {
    console.log("DATA in withLowestPriceVariant: ", data ? data.variants : null);
    return data ? ({ ...data, "variant": data.variants ? getLowestPriceVariant(data.variants) : null }) : null;

    // data
    //     ? Object.keys(data).reduce(
    //         (acc, curr) => curr !== "variants"
    //             ? ({
    //                 ...acc,
    //                 [curr]: data[curr]
    //             }) : acc
    //         , { "variant": getLowestPriceVariant(data.variants) })
    //     : data
};