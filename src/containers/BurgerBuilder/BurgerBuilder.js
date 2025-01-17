import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad: 0.5,
    meat: 1.6,
    cheese: 1.4,
    bacon: 0.5
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        }
    }
    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddititon = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddititon;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

    }

    removeIngredientHandler = ( type ) => {
        

    }
    

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                   ingredientAdded={this.addIngredientHandler}  />
            </Aux>
        );
    }
}
export default BurgerBuilder;