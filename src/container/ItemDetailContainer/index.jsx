import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetaIl';
import { PropagateLoader } from 'react-spinners';
import { doc, getDoc} from "firebase/firestore";
import { db } from '..//..//firebase/config';



const ItemDetailContainer = () => {

  const {id} = useParams ()
  const [productsDetail, setproductsDetail] = useState(null)
    useEffect(() => {
      const getProductsDetail = async () =>{
        const response = await fetch( `https://fakestoreapi.com/products/${id}`);
       
        

        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setproductsDetail({...docSnap.data(), id: docSnap.id})
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

      /*  const productsDetail = await response.json();
       setproductsDetail (productsDetail);*/

      }

      getProductsDetail();

    }, [id])
  return (productsDetail ? <ItemDetail productsDetail={productsDetail} /> : <PropagateLoader/>)
};

export default ItemDetailContainer;