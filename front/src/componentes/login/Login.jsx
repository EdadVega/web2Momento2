import React, { useEffect, useState } from 'react'
import './login.css'

let urlUsuarios = "http://localhost:3001/usuarios"
function Login() {
    const [usuarios, setUsuarios] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const fetchData = async()=>{
        const response =await fetch(urlUsuarios);
        if(!response.ok){
            console.log("error")
        }
        const data =await response.json();
        setUsuarios(data);
        
        
        }
        
        useEffect(()=>{
            fetchData();
        },[])
        
        console.log(usuarios)

    const handleUsername =(e)=>{
        console.log(e.target.value)
    }
    const handlePassword =(e)=>{
        console.log(e.target.value)
    }
  return (
    <>
        <div className='login-caja'>
            <div className='login'>
                <h1>Login</h1>
                <label>Username</label>
                <input type="text"  onChange={handleUsername}/>
                <label>Password</label>
                <input type="text" onChange={handlePassword}/>
                <button className='btnlogin'>Login</button>
                
            </div>
        </div>
    </>
  )
}

export default Login