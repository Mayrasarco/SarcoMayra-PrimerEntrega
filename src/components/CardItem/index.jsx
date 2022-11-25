import React from 'react'

const CardItem = ({item}) => {
  return (
    <div>
        <img src= {item.image}  widht={200} alt='card'></img>
<h1>{item.name}</h1>
    </div>
  )
}

export default CardItem;