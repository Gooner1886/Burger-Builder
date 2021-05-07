import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Tomato', type: 'tomato'},
    {label: 'Patty', type : 'patty'},
    {label: 'Cheese', type : 'cheese'},
    {label: 'Bacon', type : 'bacon'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p style={{fontSize: 'large'}}><strong>Current Price</strong>: &#8377;<strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? <strong>ORDER NOW</strong> : <strong>SIGN UP/SIGN IN TO ORDER</strong>}</button>
    </div>
);

export default buildControls;