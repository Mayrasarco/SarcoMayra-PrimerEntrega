import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ItemCount from '../ItemCount';
import InputconError from '../InputConError';
import { useContext } from 'react';
import { Shop } from '../../contexts/Shop';


const ItemDetail = ({productsDetail}) => {
  const {addProduct} = useContext(Shop);
  const[quantityItemDetail, setQuantityItemDetail] = useState(0);

  const navigate = useNavigate();

  const confirmPurchase = (quantity)=> {
    addProduct ({...productsDetail, quantity})
    setQuantityItemDetail(quantity);
  };

  const handleNavigate = () =>
  {
    navigate ('/cart')
  }
  return (
    <div>
      <img src={productsDetail.image}/>
      <h1>{productsDetail.name}</h1>
      <button className='boton' > Agregar</button>
      <InputconError/>
      {quantityItemDetail ?
      <button onClick= {handleNavigate}>Go card</button>
      :
      <ItemCount onAdd={confirmPurchase} initial={1} stock={20} />
     }
    </div>
    
  );
};

export default ItemDetail;