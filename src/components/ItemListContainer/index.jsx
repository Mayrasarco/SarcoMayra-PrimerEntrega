
import './styles.css';
//import rawProducts from '../data/products'
import { useEffect, useState } from "react";
import ItemList from "../itemList";
import { useParams } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import Ad from '../Ad';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';



export default function ItemListContainer ({greeting}){


    const [products, setProducts] =useState([]);

    const [adView, setAdView] = useState (true);

    const { categoryId}  = useParams();

    console.log(categoryId);

    const handClose= (evento) =>{
     setAdView(false);
    };
    useEffect(() => {

   
        (async() =>{
            try{
                let response;
                if (categoryId){
             response = await fetch (`https://fakestoreapi.com/products/?categories=${categoryId}`);
            }else{
            response = await fetch (`https://fakestoreapi.com/products`);
            }

            

const q = query(collection(db, "products"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
            const data= await response.json();
            console.log(data);
            if (data) setProducts(data);
        
    } catch (error) {
        console.log(error);
    }
      
      })()
    }, [categoryId])

   

   
   return(
    <>
       

   {products.length? <ItemList products={products}/>: <PropagateLoader/> }
        
    

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