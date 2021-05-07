import React from 'react';
import classes from './Order.css';

const Order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style = {{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin : '0 8px',
                border: '1px solid #ccc',
                backgroundColor: '#82b7bef5',
                padding: '5px',
                color: '#b32121f5',
                fontWeight: 'bold'
                
            }} 
            key={ig.name}>{ig.name} ({ig.amount})</span>
    })

    return (
    <div className={classes.Order}>
        <p><strong>Ingredients</strong>: {ingredientOutput}</p>
        <p><strong>Price</strong>: <strong>&#8377; {props.price}</strong></p>
    </div>
    );
    
}

export default Order;