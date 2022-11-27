import React from 'react'
import { useContext } from 'react';
import CardItem from '../../components/CardItem';
import { Shop } from '../../contexts/Shop';
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import generateOrderObject from '../../Services/GeneratorOrderObjets';

const CartContainer = () => {
    const {products, calcularTotal} = useContext (Shop);

    const confirmPurchase = () => {
      //Mostrar un formulario de compra, donde el usuario ingrese sus datos
      (async ()=> {

          const nombreComprador = "Sebas"
          const telefono = 111111111
          const email = "sebas@live.com"
  
          const generatedOrder = generateOrderObject(
                                          nombreComprador,
                                          email,
                                          telefono,
                                          products,
                                          calcularTotal())
          console.log(generatedOrder);

           
          let productOutOfStock = []
          //Chequear el stock de los productos en el carrito
          for (const productInCart of products) {
              const docRef = doc(db, "products", productInCart.id);
              const docSnap = await getDoc(docRef);
              console.log(docSnap);
              const productInFirebase = {...docSnap.data(), id: doc.id}
              if (productInCart.quantity > productInFirebase.quantity) productOutOfStock.push(productInCart)                
          }
  
          console.log(productOutOfStock);
  
          if (productOutOfStock.length === 0) {
              //Disminuir el stock existente
              console.log(products);
  
              for (const productInCart of products) {
                      const productRef = doc(db, "products", productInCart.id);
          
                      const docSnap = await getDoc(productRef);
                      const productInFirebase = {...docSnap.data(), id: doc.id}
          
                      // Set the "capital" field of the city 'DC'
                      await updateDoc(productRef, {
                          quantity: productInFirebase.quantity - productInCart.quantity
                      });
                  }

                  try {
                    const docRef = await addDoc(collection(db, "orders"), generatedOrder);
                    alert(`Se generó la order correctamente con ID: ${docRef.id}`)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                alert("Hay algún producto fuera de stock")
            }
        })()

    }
  return (
    <div>
       {products.map(product =>{
        return <CardItem  key= {product.id} item= {product}/>

       }
        )} 
         <button  onClick={confirmPurchase}>Confirmar compra</button>

    </div>
  )
}

export default CartContainer;