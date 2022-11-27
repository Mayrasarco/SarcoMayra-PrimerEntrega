import React from 'react'
import { useContext } from 'react';
import CardItem from '../../components/CardItem';
import { Shop } from '../../contexts/Shop';

const CartContainer = () => {
    const {products} = useContext (Shop)
  return (
    <div>
       {products.map(product =>{
        return <CardItem  key= {product.id} item= {product}/>
       }
        )} 

    </div>
  )
}

export default CartContainer;