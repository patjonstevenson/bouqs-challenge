const getCategoryWithProductIds = data => ({
    ...data,
    products: data.products.map(p => p.id)
});

export const getCategoriesFromData = data =>
    data.map(getCategoryWithProductIds);

const getProductsFromCategory = (products, category) => ({
    ...products,
    ...category.products.map(addImageSrc)
});

export const getProductsFromData = data =>
    data.reduce(getProductsFromCategory, []);

const addImageSrc = data => {
    const imageURL = data.images ? data.images[0].url : null// data.images.find(i => i.option === variantName) || null;
    const src = imageURL ? `${imageURL.slice(0, imageURL.length)}?t=${Date.now()}` : null;
    return { ...data, imageSrc: src };
}

const getProductsByCategoryReducer = (acc, curr) => ({
    ...acc,
    // Added the map below to get the correct image src into the component
    [curr.slug]: curr.products.map(addImageSrc)//.map(p => ({ ...p, imageSrc: p.images[0].url }))
});

export const getProductsByCategoryFromData = data =>
    data.reduce(getProductsByCategoryReducer, {})