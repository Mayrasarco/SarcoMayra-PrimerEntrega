import React from 'react'
import Item from '../Item'
import { useParams } from 'react-router-dom'
import { useState } from 'react'


const ItemList = ({products}) => {


  const { categoryId } = useParams()
const [refresh, setRefresh] = useState(categoryId)
if(categoryId){
  const productsFiltered = products.filter(product => product.category == categoryId)
  products= productsFiltered
}
  return (
    
    <div className= 'cards-products'>
      
      
    {products.map((product) => {
        return <Item key={product.id} product={product}/>
    }) }
    </div>
)
  
}

export default ItemList;