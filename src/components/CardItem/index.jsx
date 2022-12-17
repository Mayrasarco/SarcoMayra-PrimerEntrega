import React from 'react';
import { useContext } from 'react';
import { Shop } from '../../contexts/Shop';


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
        
        <button style = {{height: 2.5}} onClick={handleRemove} >x</button>
        
       
    </div>
  )
}

export default CardItem;