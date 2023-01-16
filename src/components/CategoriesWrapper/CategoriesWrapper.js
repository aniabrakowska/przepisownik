import React from "react";

import CategoriesItem from "./CategoriesItem/CategoriesItem";
import { categories } from "../../data/data";

import { Splide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import '@splidejs/react-splide/dist/css/splide-core.min.css';

const CategoriesWrapper = () => (
    <Splide 
        options={ { 
            type: 'loop',
            perPage: 4, 
            perMove: 1,
            pagination: false,
        } }
        aria-label="React Splide Example"
    >
        {categories.map(item => (
            <CategoriesItem
                key={item.id}
                {...item}
            />
        ))}
    </Splide>
);

export default CategoriesWrapper;