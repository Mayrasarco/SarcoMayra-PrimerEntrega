
import './styles.css';
import rawProducts from '../data/products'
import { useEffect, useState } from "react";
import ItemList from "../itemList";






export default function ItemListContainer ({greeting}){


    const [products, setProducts] =useState([]);

    useEffect(() => {

   
        (async() =>{
            try{
            const response = await fetch ('https://fakestoreapi.com/products');
            const data= await response.json();
            console.log(data);
            setProducts(data.results);
        
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
