import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './type';

export const productQuantity = (action, name) => {
    console.log('getNumber of basket');
    return (dispatch) => {
        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        });
    }
}

export const clearProduct = (name) => {
        return (dispatch) => {
        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        });
    }
}