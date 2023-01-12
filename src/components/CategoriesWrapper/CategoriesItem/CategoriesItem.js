import React from "react";
import PropTypes from "prop-types";

import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/splide-core.min.css';

import defaultCategoryImage from "../../../assets/images/default.jpg";
import styles from './CategoriesItem.module.scss';

const CategoriesItem = ({image, name, id}) => (
    <SplideSlide>
        <a href="#ania" className={styles.slide}>
            <img src={image} alt={id} className={id} />
            <p className={styles.paragraph}>{name}</p>
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