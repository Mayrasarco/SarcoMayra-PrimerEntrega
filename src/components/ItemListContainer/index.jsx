
import './styles.css';
//import rawProducts from '../data/products'
import React, { useEffect, useState } from "react";
import ItemList from "../itemList";
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import Ad from '../Ad';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import saveProductsFirebase from '../../Services/SaveProductsFirebase';
import { capitalizeFirstLetter } from '../../Utils/index';



export default function ItemListContainer ({greeting}){


    const [products, setProducts] =useState([]);
    const [loading, setLoading] = useState(false);

    const [adView, setAdView] = useState (false);

    const { categoryId}  = useParams();

    console.log(categoryId);

    const handClose= (evento) =>{
     setAdView(false);
    };

    useEffect(() => {

   
        (async() =>{
            try{
              setLoading(true);
                /*let response;*/
              /*  if (categoryId){
             response = await fetch (`https://fakestoreapi.com/products/?categories=${categoryId}`);
            }else{
            response = await fetch (`https://fakestoreapi.com/products`);
            }*/

  let q;
  if(categoryId){
    const categoryCapitalized = capitalizeFirstLetter(categoryId);
 q = query(collection(db, "products"), where ('category', '===', categoryCapitalized))
  }else {
    q = query(collection(db, "products"));
};


 

const querySnapshot = await getDocs(q);
const productosFireBase = [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  productosFireBase.push({...doc.data(),id: doc.id})
});
  setProducts(productosFireBase);

            /*const data= await response.json();*/
           /* console.log(data);*/
            
        
    } catch (error) {
        console.log(error);
    }
      
      })()
    }, [categoryId]);

    const handleAddProducts = async () => {
      await saveProductsFirebase()
  };
   
   return(
    <>
       

   {products.length && !loading ?
   <ItemList products= {products}/>
   : loading 
   ? <Loader/>
   : <button onClick={handleAddProducts}>Save automatically characters in firebase</button>}
        
    

    {adView ? (
    <Ad>
        <h1>Este es un anuncio de cookies</h1>
        <button onClick ={handClose}>Cerrar</button>
    </Ad> 
    ) : null
    }
    </>
   );
}