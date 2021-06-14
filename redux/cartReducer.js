import { ADD_TO_CART, REMOVE_FROM_CART } from './cartAction'
import cartConstructor from './cartConstructor'
import { REMOVE_ITEM } from './homeAction'
import { ADD_TO_ORDER } from './OrderAction'
const initialeState = {
    items: {},
    totalAmount: 0
}
export default (state = initialeState, action) => {

    switch (action.type) {
        //to add product in cart
        case ADD_TO_CART:
            const selectedProduct = action.product
            const productPrice = selectedProduct.price
            const productTitle = selectedProduct.title
            console.log(selectedProduct)
            if (state.items[selectedProduct.id]) {
                const updatedProduct = new cartConstructor(state.items[selectedProduct.id].quantity + 1,
                    productPrice, productTitle, state.items[selectedProduct.id].sum + productPrice)
                console.log('in it', state.items)
                return {
                    ...state,
                    items: { ...state.items, [selectedProduct.id]: updatedProduct },
                    totalAmount: state.totalAmount + productPrice
                }
            } else {
                const newProduct = new cartConstructor(1, productPrice, productTitle, productPrice)
                console.log('after', newProduct)
                return {
                    ...state,
                    items: { ...state.items, [selectedProduct.id]: newProduct },
                    totalAmount: state.totalAmount + productPrice
                }
            }
        //to remove product from cart
        case REMOVE_FROM_CART:
            const productQuantity = state.items[action.prodId].quantity
            console.log(productQuantity)
            if (productQuantity > 1) {
                //need to reduce quantity 1
                const multiProduct = state.items[action.prodId]
                const productAfterChange = new cartConstructor(multiProduct.quantity - 1, multiProduct.productPrice,
                    multiProduct.productTitle, multiProduct.sum - multiProduct.productPrice
                )
                console.log(productAfterChange)
                return {
                    ...state,
                    items: { ...state.items, [action.prodId]: productAfterChange },
                    totalAmount: state.totalAmount - state.items[action.prodId].productPrice
                }
            } else {
                const itemsInCar = { ...state.items }
                delete itemsInCar[action.prodId]
                return {
                    ...state,
                    items: itemsInCar,
                    totalAmount: state.totalAmount - state.items[action.prodId].productPrice
                }
            }
        //to empty order screen
        case ADD_TO_ORDER:
            return initialeState

        case REMOVE_ITEM:
            if (!state.items[action.proId]) {
                return state
            }
            const ubdatedItems = { ...state.items }
            const itemTotal = state.items[action.proId].sum
            delete ubdatedItems[action.proId]
            return {
                ...state,
                items: ubdatedItems,
                totalAmount: state.totalAmount - itemTotal
            }
        default:
            return state
    }

}


