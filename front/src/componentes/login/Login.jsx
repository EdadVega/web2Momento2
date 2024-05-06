import React, { useState } from 'react';
import './login.css';
import {usuarios} from '../database/DataBase'
import { Navigate } from 'react-router-dom';


function Login() {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggin, setIsLoggin] = useState(false)

    const validarCredenciales = () => {
        const usuarioValido = usuarios.find(usuario => usuario.user === username && usuario.password === password);
        if (usuarioValido) {
            setIsLoggin(true); 
            
        } else {
            console.log("Error de credenciales");
        }
    };

    if (isLoggin) {
       
        return <Navigate to="/home" />;
    }

            
       
    


    
    const handleUsername =(e)=>{
        setUsername(e.target.value)
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }

    
  return (
    <>
        <div className='login-caja'>
            <div className='login'>
                <h1>Login</h1>
                <label>Username</label>
                <input type="text"  value={username}  onChange={handleUsername}/>
                <label>Password</label>
                <input type="password" value={password} onChange={handlePassword}/>
                <button className='btnlogin' onClick={validarCredenciales} >Login</button>
                
            </div>
            
            
        </div>
        
                   
        
    </>
  )
}

export default Login