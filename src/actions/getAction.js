import { GET_NUMBER_IN_BASKET } from './type';

export const getNumber = () => {
    console.log('getNumber of basket');
    return (dispatch) => {
        dispatch({
            type: GET_NUMBER_IN_BASKET
        });
    }
}