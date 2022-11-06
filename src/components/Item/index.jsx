import React from 'react'


const Item = ({product}) => {
  return (
    <div>
    <img src= {product.image} />
    <p key= {product.id}> {product.title}, stock: {10} </p>
    </div>
  )
}

export default Item;