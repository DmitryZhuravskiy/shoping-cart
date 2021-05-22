import React, {useEffect} from 'react';
import {connect } from 'react-redux';
import {getNumber} from '../actions/getAction';
import { BrowserRouter, Link } from 'react-router-dom';

function Navbar(props) {

    useEffect(() => {
        getNumber();
    }, [])
    return (
    <BrowserRouter>
      <header>
      <div className="overlay"></div>
        <nav>
          <h2 className="navbar__title">Shop</h2>
          <ul>
            <li className="link-cursor"><Link to="/" className="link-to">Home</Link></li>
            <li className="link-cursor"><Link to="/cart" className="link-to">Cart</Link></li>
            <li className="link-cursor">
              <Link to="/" className="link-to"><img src='./images/basket-outline.svg' alt="" width='20' height='20' />Card<span>{props.basketProps.basketNumbers}</span></Link>
            </li>
          </ul>
        </nav>
      </header>
     </BrowserRouter>
    )
}

const mapStateToProps = (state) => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumber})(Navbar);
