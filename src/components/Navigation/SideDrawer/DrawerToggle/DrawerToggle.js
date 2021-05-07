import React from 'react';

import classes from './DrawerToggle.css';
import sdLogo from '../../../../assets/images/Burger.png';


const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <img src = {sdLogo} alt = "Logo" />
    </div>
);

export default drawerToggle;