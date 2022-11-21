import React, {useState} from 'react'
import './styles.css';
import ItemCount from '../ItemCount';
import InputconError from '../ItemCount';
import { useContext } from 'react';
import { Shop } from '../../contexts/Shop';


const ItemDetail = ({productsDetail}) => {
  const {addProduct} = useContext(Shop);
  const[quantityItemDetail, setQuantityItemDetail] = useState(0);

  const confirm = (quantity)=>{
    addProduct ({...productsDetail, quantity})
    setQuantityItemDetail (quantity);
  };
  return (
    <div>
      <img src={productsDetail.image}/>
      <h1>{productsDetail.name}</h1>
      <button className='boton' > Agregar</button>
      <InputconError/>
      {quantityItemDetail ?
      <button> Go card</button>
      :
      <ItemCount onAdd={confirm} initial={1} stock={20} />
     }
    </div>
  );
};

export default ItemDetail;