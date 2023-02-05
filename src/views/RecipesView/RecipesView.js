import React from "react";

import RecipesWrapper from "../../components/RecipesWrapper/RecipesWrapper";
import Form from "../../components/Form/Form";
import { recipes, categories } from "../../data/data";



class RecipesView extends React.Component{

    state = {
        recipesItems: [...recipes],
        categoriesItems: [...categories],
    }

    addItem = (e) => {
        e.preventDefault();

        const newRecipe = {
            name: e.target[0].value,
            image: e.target[1].value,
            ingredients: e.target[2].value,
            process: e.target[3].value,
            category: e.target[4].value,
        }

        this.setState( prevState => ({
            recipesItems: [...prevState.recipesItems, newRecipe],
        }));

        e.target.reset();
    }
    

    render() {
        return (
            <>
                <p>Recipes List :</p>
                <RecipesWrapper 
                    recipesItems={this.state.recipesItems}
                    
                />
                <Form submitFn={this.addItem} categoriesItems={this.state.categoriesItems}/>
            </>
        )
    }
} 

export default RecipesView;