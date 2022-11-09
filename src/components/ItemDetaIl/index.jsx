import React from 'react'


const ItemDetail = ({productsDetail}) => {
  return (
    <div>
      <img src={productsDetail.image}/>
      <h1>{productsDetail.name}</h1>
    </div>
  )
}

export default ItemDetail;