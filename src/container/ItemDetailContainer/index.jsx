import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetaIl';
import Loader from '../../components/Loader';
import { doc, getDoc} from "firebase/firestore";
import { db } from '../../firebase/config';




const ItemDetailContainer = () => {

  const {id} = useParams ()
  const [productsDetail, setproductsDetail] = useState(null)
    useEffect(() => {
      const getProductsDetail = async () =>{
        
      
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setproductsDetail({...docSnap.data(), id: docSnap.id})
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

     

      }

      getProductsDetail();

    }, [id])
  return (productsDetail ? <ItemDetail productsDetail={productsDetail} /> : <Loader/>)
};

export default ItemDetailContainer;