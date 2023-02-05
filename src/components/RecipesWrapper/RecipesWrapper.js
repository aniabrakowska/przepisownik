import React from "react";
 
import RecipesItem from "./RecipesItem/RecipesItem";
// import { recipes } from "../../data/data";

const RecipesWrapper = (props) => (
    <>
        {props.recipesItems.map(item => (
            <RecipesItem
                key={item.name}
                {...item}
            />
        ))}
    </>
);

export default RecipesWrapper;