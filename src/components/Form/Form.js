import React from "react";

const Form = ({submitFn, categoriesItems}) => (
    <>
    <form onSubmit={submitFn}>
        <input placeholder="name" name="name" />
        <input placeholder="image" name="image" />
        <input placeholder="ingredients" name="ingredients" />
        <input placeholder="process" name="process" />
        <select name="categories" id="categories">
            {categoriesItems.map(item => (
                <option value={item.id}>{item.name}</option>
            ))}
        </select>
        <button type="submit">Dodaj</button>
    </form>
    </>
);

export default Form;