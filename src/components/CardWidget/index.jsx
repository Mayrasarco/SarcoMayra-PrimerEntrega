import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import CardIcon from "../CardIcon";

import "./styles.css";


const CardWidget = () => {
    const navigate = useNavigate();

    const {totalItemsCart} = useContext (Shop);

    
 return <div 
 style= {{
    width: 25,
    height: 25,
    display: "flex",
    flexDirection: "row",
}}
onClick ={()=> navigate("/cart")}
>

    
   <CardIcon/>
   <span>{totalItemsCart() === 0 ? null : `(${totalItemsCart()})`}</span>
</div>
 
}

export default CardWidget;
