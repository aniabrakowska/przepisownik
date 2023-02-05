import React from "react";

import { categories } from "../../data/data";

const CategoriesName = ({ category }) => (
    // <>
    // <p>{category}</p>
    // </>
    categories.map(item => (
        <>
        <p>{category === item.id ? item.name : ''}</p>
        </>
    ))
);

export default CategoriesName;