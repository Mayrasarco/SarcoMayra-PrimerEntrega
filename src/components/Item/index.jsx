import React from 'react'
import { useNavigate } from 'react-router-dom'


const Item = ({ product }) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)
  }


  return (
    <div onClick={navigateDetail}>
      <img src={product.image} />
      <p key={product.id}> {product.title}, stock: {10} </p>
    </div>
  )
}

export default Item;