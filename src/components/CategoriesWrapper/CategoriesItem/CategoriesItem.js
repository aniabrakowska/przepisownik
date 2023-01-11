import React from "react";
import PropTypes from "prop-types";

import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/splide-core.min.css';

import './CategoriesItem.css';
import defaultCategoryImage from "../../../assets/images/default.jpg";

const CategoriesItem = ({image, name, id}) => (
    <SplideSlide>
        <a href="#ania">
            <img src={image} alt={id} />
            <p>{name}</p>
        </a>
    </SplideSlide>
);

CategoriesItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

CategoriesItem.defaultProps = {
    image: defaultCategoryImage,
}

export default CategoriesItem;