import { ADD_PRODUCT_TO_BASKET, GET_NUMBER_IN_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/type';

const initialState = {
        basketNumbers: 0,
        cartCost: 0,
        products: {
            greatTShirt: {
                name: 'Great T-shirt',
                tagName: 'greatTShirt',
                price: 15,
                numbers: 0,
                inCart: false,
            },
            justDress: {
                name: 'Just Dress',
                tagName: 'justDress',
                price: 25,
                numbers: 0,
                inCart: false,
            },
            switter: {
                name: 'Switter',
                tagName: 'switter',
                price: 35,
                numbers: 0,
                inCart: false,
            },
            tShirt: {
                name: 'T-shirt',
                tagName: 'tShirt',
                price: 45,
                numbers: 0,
                inCart: false,
            }
        }
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_TO_BASKET:
        productSelected = {...state.products[action.payload]};
        productSelected.numbers += 1;
        productSelected.inCart = true;

        return {
            ...state,
            basketNumbers: state.basketNumbers + 1,
            cartCost: state.cartCost + state.products[action.payload].price,
            products: {
                ...state,
                [action.payload]: productSelected
            }
        }

        case GET_NUMBER_IN_BASKET: 
            return {
                ...state
            }

        case INCREASE_QUANTITY:
        console.log(state.products[action.payload]);
            productSelected = {...state.products[action.payload]}
            productSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
        console.log(state.products[action.payload]);
            productSelected = {...state.products[action.payload]};
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if (productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers;
            } else {
                let newBasketNumbers = 0;
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload];
                newBasketNumbers = state.basketNumbers - 1;
            }
            return {
                ...state,
                basketNumbers: state.basketNumbers - 1,
                cartCost: state.cartCost - state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }

        case CLEAR_PRODUCT:
        console.log(state.products[action.payload]);
            productSelected = {...state.products[action.payload]};
            let numbersBackUp = productSelected.numbers;
            productSelected.inCart = false;
            productSelected.numbers = 0;
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackUp,
                cartCost: state.cartCost - (numbersBackUp * productSelected.price),
                [action.payload]: productSelected,
            }

        default: 
            return state;
    }
}