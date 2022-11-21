import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../contexts/Theme'


const Item = ({ product }) => {

  const navigate = useNavigate()

  const {themeColor} = useContext(Theme);

  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)
  }


  return (
    <div onClick={navigateDetail}
    className = { themeColor === "light"? "card-detail" : "card-detail-dark"} >
      <img src={product.image} />
      <p key={product.id}> {product.title}, stock: {10} </p>
    </div>
  )
}

export default Item;