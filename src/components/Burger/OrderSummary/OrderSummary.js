import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';

import classes from './OrderSummary.css';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class. Just for checking didComponentUpdate.


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> );
        });

        return(
            <Aux>
                <h3 className = {classes.YourOrder}>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: &#8377;{this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <button className = {classes.Danger}  onClick={this.props.purchaseCancelled}>CANCEL</button>
                <button className = {classes.Success}  onClick={this.props.purchaseContinued}>CONTINUE</button>
            </Aux>
        );
    }
}

export default OrderSummary;