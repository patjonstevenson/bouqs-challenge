const getLowestPriceVariant = variants => {
    const variant = variants.length
        ? variants.reduce((acc, curr) => {
            return curr.prices.regular < acc.prices.regular ? curr : acc
        })
        : variants

    return variant;
};

// product object -> product object with variant instead of variants
export const withLowestPriceVariant = data => {
    return data ? ({ ...data, "variant": data.variants ? getLowestPriceVariant(data.variants) : null }) : null;
};