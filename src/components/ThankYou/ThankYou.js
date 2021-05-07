import React from 'react';

import classes from './ThankYou.css';

const thankyou = () => {
    
    return(
        <div className={classes.ThankYou}>
            <div className = {classes.Message}>
                <h1>Thank you!</h1>
                <h3>Your Order has been placed successfully.</h3>
            </div>
            
            <p className = {classes.typara}><a href = "/burgerbuilder" >Build another Burger</a></p>
            <p className = {classes.typara}><a href = "/" >Back to Home</a></p>
        </div>
    );
}

export default thankyou;