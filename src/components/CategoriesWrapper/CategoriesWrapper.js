import React from "react";

import CategoriesItem from "./CategoriesItem/CategoriesItem";

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const CategoriesWrapper = (props) => (
    <>

            <Splide 
                options={ { 
                    type: 'loop',
                    perPage: 4, 
                    perMove: 1,
                    pagination: false,
                } }
                aria-label="React Splide Example"
            >
                {props.items.map(item => (
                    <CategoriesItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </Splide>

    </>
);

export default CategoriesWrapper;