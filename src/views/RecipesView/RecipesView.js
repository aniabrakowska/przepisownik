import React from "react";
import RecipesWrapper from "../../components/RecipesWrapper/RecipesWrapper";
import Form from "../../components/Form/Form";
import { recipes } from "../../data/data";

class RecipesView extends React.Component{

    state = {
        items: [...recipes],
    }

    addItem = (e) => {
        e.preventDefault();

        const newRecipe = {
            name: e.target[0].value,
            image: e.target[1].value,
            ingredients: e.target[2].value,
            process: e.target[3].value,
        }

        this.setState( prevState => ({
            items: [...prevState.items, newRecipe],
        }));

        e.target.reset();
    }
    

    render() {
        return (
            <>
                <p>Recipes List :</p>
                <RecipesWrapper 
                    items={this.state.items}
                />
                <Form submitFn={this.addItem}/>
            </>
        )
    }
} 

export default RecipesView;