import React, {Fragment} from 'react';
import {connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import greatTShirt from '../images/pin--1.jpg';
import justDress from '../images/pin--2.jpg';
import switter from '../images/pin--3.jpg';
import tShirt from '../images/pin--4.jpg';

function Cart({basketProps,  productQuantity, clearProduct}) {

    let productsInCart = [];
    Object.keys(basketProps.products).forEach( function(item) {
        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
    })

    // const productImages = [greatTShirt, justDress, switter, tShirt];
    const productImages = (product) => {
        if (product.tagName==='greatTShirt') {
            return greatTShirt;
        } else if (product.tagName==='justDress') {
            return justDress;
        } else if (product.tagName==='switter') {
            return switter;
        } else if (product.tagName==='tShirt') {
            return tShirt;
        }
    }


    productsInCart = productsInCart.map((product, index) => {
        return (
            <Fragment key={index}>
            <div className="product"><img  src={productImages(product)} alt="" />
                <span className="delete-type-items" onClick={() => clearProduct(product.tagName)}>X</span>
                <span className="sm-hide">{product.name}</span>
            </div>
            <div className="price sm-hide">${product.price},00</div>
            <div className="quantity">
            <span className="up" onClick={() => productQuantity('increase', product.tagName)}>Up</span>
            <span>{product.numbers}</span>
            <span className="down" onClick={() => productQuantity('decrease', product.tagName)}>Down</span>
            </div>
            <div className="total">${product.numbers * product.price},00</div>

            </Fragment>
        )
    })

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">{productsInCart}</div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalPrice">basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, {productQuantity, clearProduct})(Cart);