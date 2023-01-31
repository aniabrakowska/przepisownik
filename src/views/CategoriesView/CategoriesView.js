import React from "react";
import CategoriesWrapper from '../../components/CategoriesWrapper/CategoriesWrapper';
import { categories } from "../../data/data";

class CategoriesView extends React.Component {
    state= {
        items: [...categories],
    }
    render(){
        return(
            <>
                <p>Categories List :</p>
                <CategoriesWrapper 
                    items={this.state.items}
                />
            </>
        )
    }
} 

export default CategoriesView;