import { ADD_TO_ORDER } from "./OrderAction"
import moment from 'moment';

const initialeState = {
    order: []
}


var datee = moment()
    .utcOffset('+02:00')
    .format('YYYY-MM-DD hh:mm:ss a');

export default (state = initialeState, action) => {
    switch (action.type) {
        case ADD_TO_ORDER:
            const orderFromCart = {
                id: Math.random().toString(), items: action.orderInfo.item
                , amount: action.orderInfo.amount, date: datee
            }
            console.log(orderFromCart)
            return {
                ...state,
                //to merg order array with orderfromcartarray
                order: state.order.concat(orderFromCart)
            }

        default:
            return state
    }

}