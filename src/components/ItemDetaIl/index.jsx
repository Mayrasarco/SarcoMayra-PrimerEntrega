import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ItemCount from '../ItemCount';
import { useContext } from 'react';
import { Shop } from '../../contexts/Shop';
import { Theme } from "../../contexts/Theme"



const ItemDetail = ({productsDetail}) => {
  const {addProduct} = useContext(Shop);
  const {themeColor} = useContext(Theme)
  const[quantityItemDetail, setQuantityItemDetail] = useState(0);
  const navigate = useNavigate();

  const confirmPurchase = (quantity)=> {
    addProduct ({...productsDetail, quantity})
    setQuantityItemDetail(quantity);
  };

  const handleNavigate = () => {
    navigate ('/cart')
  }
  return (
    <div className={ themeColor === "dark" ? "item-detail-dark" : "item-detail"}>
      <img src={productsDetail.image}  widht={"18rem"} alt="detail"/>
      <h1>{productsDetail.name}</h1>
      <p>{productsDetail.description}</p>
      <p>{productsDetail.price}</p>
      <p>{productsDetail.quantity}</p>
  
      {quantityItemDetail ?
      <button onClick= {handleNavigate}>Go card</button>
      :
      <ItemCount onAdd={confirmPurchase} initial={1} stock={productsDetail.quantity} />
     }
    </div>
    
  );
};

export default ItemDetail;