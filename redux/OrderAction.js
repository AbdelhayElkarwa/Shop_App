
export const ADD_TO_ORDER = 'ADD_TO_ORDER'


export const addToOrder = (productItem, totalAmount) => {
    return { type: ADD_TO_ORDER, orderInfo: { item: productItem, amount: totalAmount } }

}