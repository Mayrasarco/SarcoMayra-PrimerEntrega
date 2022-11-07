
import './styles.css';
import rawProducts from '../data/products'
import { useEffect, useState } from "react";
import ItemList from "../itemList";
import {useParams} from 'react-router-dom'






export default function ItemListContainer ({greeting}){


    const [products, setProducts] =useState([]);

    useEffect(() => {

   
        (async() =>{
            try{
            const response = await fetch ('https://fakestoreapi.com/products');
            const data= await response.json();
            console.log(data);
            setProducts(data);
        
    } catch (error) {
        console.log(error);
    }
      
      })()
    }, [])

    console.log (products);

   
   return(
    <>
       

    <ItemList products={products}/> 
        </>
    )
    
    }
