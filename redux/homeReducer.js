import PRODUCTS from "../product/Product"
import { ADD_NEW_PRODUCT, REMOVE_ITEM, UPDATE_PRODUCT } from "./homeAction";

const initialeState = {
    availableProducts: PRODUCTS,
    userProduct: PRODUCTS.filter(produc => produc.ownerId === 'u1')
}


console.log(initialeState.userProduct)
export default (state = initialeState, action) => {
    switch (action.type) {
        case ADD_NEW_PRODUCT:
            const newProduct = {
                id: Math.random().toString(), ownerId: 'u1', title: action.newProductData.titel,
                imageUrl: action.newProductData.imageUrl, description: action.newProductData.description, price: action.newProductData.price
            }
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProduct: state.userProduct.concat(newProduct)
            }
        case UPDATE_PRODUCT:
            const productIndex = state.userProduct.findIndex(prod => prod.id === action.pid)
            const updatedprod = {
                id: action.pid, ownerId: state.userProduct[productIndex].ownerId,
                title: action.productData.titel, imageUrl: action.productData.imageUrl,
                description: action.productData.description, price: state.userProduct[productIndex].price
            }
            const updatedUserProducts = [...state.userProduct]
            updatedUserProducts[productIndex] = updatedprod
            const availableProductIndex = state.availableProducts.findIndex(prod => prod.id === action.pid)
            const updatedAvailableProdact = [...state.availableProducts]
            updatedAvailableProdact[availableProductIndex] = updatedprod
            return {
                ...state,
                availableProducts: updatedAvailableProdact,
                userProduct: updatedUserProducts
            }

        case REMOVE_ITEM:
            return {
                ...state,
                userProduct: state.userProduct.filter(product => product.id !== action.proId),
                availableProducts: state.availableProducts.filter(product => product.id !== action.proId)
            }
        default:
            return state
    }



}