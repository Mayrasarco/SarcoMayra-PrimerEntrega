import React from 'react'
import { useContext } from 'react';
import CardItem from '../../components/CardItem';
import { Shop } from '../../contexts/Shop';
import { saveOrder }from "../../Services/saveOrder"

const CartContainer = () => {
    const {products, calcularTotal} = useContext (Shop);

    const confirmPurchase = () => {
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

    </div>
  )
}

export default CartContainer;