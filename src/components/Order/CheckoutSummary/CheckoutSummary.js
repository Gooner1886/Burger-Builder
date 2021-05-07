import React from 'react';
import Burger from '../../Burger/Burger';

import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Your delicious burger is ready!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <button 
                className = {classes.Cancel}
                onClick={props.checkoutCancelled}>CANCEL</button>
            <button 
                className = {classes.Continue}
                onClick={props.checkoutContinued}>CONTINUE</button>
        </div>
    );
}

export default checkoutSummary;