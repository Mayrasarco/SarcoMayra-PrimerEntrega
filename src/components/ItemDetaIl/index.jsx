import React, {useState} from 'react'
import './styles.css';
import ItemCount from '../ItemCount';
import InputconError from '../ItemCount';


const ItemDetail = ({productsDetail}) => {
  const[quantityItemDetail, setQuantityItemDetail] = useState(0);

  const confirm = (quantity)=>{
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