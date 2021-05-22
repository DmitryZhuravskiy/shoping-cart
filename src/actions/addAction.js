import { ADD_PRODUCT_TO_BASKET } from './type';

export const addBasket = (productName) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_BASKET,
            payload: productName
        });
    }
}