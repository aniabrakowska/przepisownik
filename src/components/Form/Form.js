import React from "react";

const Form = ({submitFn}) => (
    <form onSubmit={submitFn}>
        <input placeholder="name" name="name" />
        <input placeholder="image" name="image" />
        <input placeholder="ingredients" name="ingredients" />
        <input placeholder="process" name="process" />
        <button type="submit">Dodaj</button>
    </form>
);

export default Form;