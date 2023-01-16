import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import CategoriesWrapper from "../../components/CategoriesWrapper/CategoriesWrapper";
// import RecipesView from "../RecipesView/RecipesView";
// import CategoriesView from "../CategoriesView/CategoriesView";


const Root = () => {
    return (
    <BrowserRouter>
        <> 
            <div className="wrapper">
                <h1 className="header1">hello world</h1>
                <h2 className="header2">Hello Ania</h2>
                {/* <CategoriesWrapper />
                <CategoriesView />
                <RecipesView /> */}
            </div>
        </>
        <Routes>
            <Route path="/*" element={<h3>Główna</h3>} />
            <Route path="/categories" element={<h3>kategorie</h3>} />
            <Route path="/recipes" element={<h3>Przepisy</h3>} />
        </ Routes>
    </BrowserRouter>
    );
}

export default Root;