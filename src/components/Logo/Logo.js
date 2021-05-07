import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <a href = "/"><img src={burgerLogo} alt="MyBurger"  /></a>
    </div>
);

export default logo;