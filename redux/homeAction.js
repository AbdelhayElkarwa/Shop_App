export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'


export const removeItem = (proId) => {
    return { type: REMOVE_ITEM, proId: proId }
}


export const addNewProduct = (titel, imageUrl, price, description) => {
    return { type: ADD_NEW_PRODUCT, newProductData: { titel, imageUrl, description, price } }
}

export const updatedProdact = (id, titel, imageUrl, description) => {
    return {
        type: UPDATE_PRODUCT,
        pid: id,
        productData: { titel, imageUrl, description }
    }
}