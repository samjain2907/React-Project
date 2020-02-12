import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="burger-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="burger-bottom" />    
        </div>
    );
};

export default burger;
