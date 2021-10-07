import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum + country.population,0)
    return (
        <div>
           <h5>This is cart : {cart.length}</h5>
           <p>total population : {totalPopulation}</p> 
        </div>
    );
};

export default Cart;