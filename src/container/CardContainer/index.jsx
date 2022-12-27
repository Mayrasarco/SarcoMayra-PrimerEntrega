import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import CardItem from '../../components/CardItem';
import { Shop } from '../../contexts/Shop';
import { saveOrder }from "../../Services/saveOrder"
import  Form  from "../../components/Form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardContainer = () => {
  

    const {products, calcularTotal} = useContext (Shop);
    const [condition, setCondition] = useState(false)

    const confirmPurchase = () => {
      setCondition(!condition)
      toast('Compra realizada!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      //Mostrar un formulario de compra, donde el usuario ingrese sus datos
      (async ()=> {

        await saveOrder(
            "Sebas",
            11111122222,
            "sebas@live.com",
            products,
            calcularTotal()


        )
      })();
    };
    

  
    

           
         
  return (
    <div>
       {products.map((product) =>{
        return <CardItem  key= {product.id} item= {product}/>



       }
        )} 
         <button  onClick={confirmPurchase}>Confirmar compra</button>
         <Form condition={condition}/>
         <ToastContainer />
    </div>
  )

  
 
}

export default CardContainer;