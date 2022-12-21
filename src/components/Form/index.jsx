import React from 'react'
import { Form } from 'react-router-dom'
import CartContainer from '../../container/CardContainer'
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { saveOrder }from "../../Services/saveOrder";
import calcularTotal from '../../contexts/Shop';
import products from '../../contexts/Shop'




const Register =({condition})=>{
const onRegister =(event)=>{
    event.preventDefault()
     const{target:{email:{value:email},password:{value:password}, adress:{value:adress}}}=event
|   console.log(email)
    console.log(password)

    const confirmPurchase = () => {
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
}



return (condition?<form onSubmit={onRegister}>
    <input name='email' placeholder='Email'></input>
    <input name='password'placeholder='Password'></input>
    <input name= 'adress' placeholder= 'Adress'></input>
    <button type="submit">Register</button>
</form>:<></>
)
}






export default Register;