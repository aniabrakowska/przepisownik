import React from "react";
import PropTypes from "prop-types";

import defaultCategoryImage from "../../../assets/images/default.jpg";
import styles from './RecipesItem.module.scss';

const RecipesItem = ({image, name, ingredients, process}) => (
    <div>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{ingredients}</p>
        <p>{process}</p>
    </div>
);

RecipesItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    process: PropTypes.string.isRequired,
}

RecipesItem.defaultProps = {
    image: defaultCategoryImage
}

export default RecipesItem;