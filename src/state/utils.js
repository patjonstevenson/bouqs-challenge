const getCategoryWithProductIds = data => ({
    ...data,
    products: data.products.map(p => p.id)
});

export const getCategoriesFromData = data =>
    data.map(getCategoryWithProductIds);

const getProductsFromCategory = (products, category) => ({
    ...products,
    ...category.products
});

export const getProductsFromData = data =>
    data.reduce(getProductsFromCategory, []);
