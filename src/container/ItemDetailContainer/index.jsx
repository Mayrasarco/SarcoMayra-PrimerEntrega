import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetaIl';
import { PropagateLoader } from 'react-spinners';

const ItemDetailContainer = () => {

  const {id} = useParams ()
  const [productsDetail, setproductsDetail] = useState (null)
    useEffect(() => {
      const getProductsDetail = async () =>{
        const response = await fetch( `https://fakestoreapi.com/products${id}`);
        const productsDetail = await response.json();
       setproductsDetail (productsDetail);

      }

      getProductsDetail();

    }, [id])
  return (productsDetail ?<ItemDetail productsDetail={productsDetail} /> : <PropagateLoader/>)
};

export default ItemDetailContainer;