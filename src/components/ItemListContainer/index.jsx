import React from "react";
import './styles.css';

function ItemListContainer ({greeting}){
    return(
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer;