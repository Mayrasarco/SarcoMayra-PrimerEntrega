import React from 'react'

const Register =()=>{
const onRegister =(event)=>{
    event.preventDefault()
     const{target:{email:{value:email},password:{value:password}}}=event
|   console.log(email)
    console.log(password)
}

return <form onSubmit={onRegister}>
    <input name='email' placeholder='Email'></input>
    <input name='password'placeholder='Password'></input>
    <button>Register</button>
</form>

} 


export default Register