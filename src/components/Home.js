import React from 'react';
import pin1 from '../images/pin--1.jpg';
import pin2 from '../images/pin--2.jpg';
import pin3 from '../images/pin--3.jpg';
import pin4 from '../images/pin--4.jpg';
import { connect } from 'react-redux';
import {addBasket} from '../actions/addAction'


const Home = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="image">
                <img src={pin1} alt="pin1" />
                <h3>Great T-shirt</h3>
                <p>15$</p>
                <a className="addToCart cart1" href="#" onClick={() => props.addBasket('greatTShirt')} >Add to cart</a>
            </div>
            <div className="image">
                <img src={pin2} alt="pin2" />
                <h3>Just Dress</h3>
                <p>25$</p>
                <a className="addToCart cart2" href="#" onClick={() => props.addBasket('justDress')} >Add to cart</a>
            </div>
            <div className="image">
                <img src={pin3} alt="pin3" />
                <h3>Switter</h3>
                <p>35$</p>
                <a className="addToCart cart3" href="#" onClick={() => props.addBasket('switter')} >Add to cart</a>
            </div>
            <div className="image">
                <img src={pin4} alt="pin4" />
                <h3>T-shirt</h3>
                <p>45$</p>
                <a className="addToCart cart4" href="#" onClick={() => props.addBasket('tShirt')} >Add to cart</a>
            </div>
            <h1>Current basket numbers is :</h1>
        </div>
    )
}

export default connect(null, {addBasket})(Home);
