import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../contexts/Shop';
import TrashCanIcon from '../TrashCanIcon';

const CardItem = ({item}) => {

  const {removeProduct} = useContext(Shop);

  const handleRemove = () => {
    removeProduct(item.id);

  }
  return (
    <div style= {{display:'flex', flexdirection: 'row', justifycontent:'center'}}>
        <img src= {item.image}  widht={200} alt='card'></img>
        <h1>{item.name}</h1>
        <p>{item.quantity}</p>
        <div style = {{widht: 25}} onClick={handleRemove}>
        <TrashCanIcon />
        </div>
       
    </div>
  )
}

export default CardItem;