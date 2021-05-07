import React from 'react';


import classes from './Home.css';
import burgerIllustration from '../../assets/images/BurgerIl2.png';

const home = () => {
    return (

        <div className = {classes.Home} >
            <div className = {classes.Content}>
                <div className = {classes.Text}>
                    <p className = {classes.First} style={{paddingInline: '7px'}}>Hasty and Tasty!</p>
                    <p className = {classes.Second}>Burger Building Redefined!</p>
                    <p className = {classes.Third} style={{paddingInline: '7px'}}>Fully Customisable Burgers</p>
                    <button className = {classes.Build}><a href = "/burgerbuilder" style = {{textDecoration: 'none', color:'inherit'}}>Build Now!</a></button>
                </div>
                <div className = {classes.Illustration}>
                    <img src = {burgerIllustration} alt = "Burger Illustrtion" />
                </div>
            </div>
            <div className = {classes.Footer}>
                    <p>Designed for personal use by <strong>Siddharth Sarma</strong></p>
            </div>      
        </div>
        
    );
};

export default home;