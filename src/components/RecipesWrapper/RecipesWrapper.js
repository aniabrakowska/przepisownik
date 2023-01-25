import React from "react";

import RecipesItem from "./RecipesItem/RecipesItem";
import { recipes } from "../../data/data";

const RecipesWrapper = () => (
    
        recipes.map(item => (
        <RecipesItem
            {...item}
        />
        ))
    
);

export default RecipesWrapper;