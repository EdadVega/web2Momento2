import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className='HomeCont'>
            <nav className='navHead'>
                    <img src="" alt="Logo" />
                    <Link to="/home">HOME</Link>
                    <Link to ="/usuario">USUARIO</Link>
                    <Link to ="/">CERRAR SESION</Link>
         
        </nav>
            <h1>Panel de control</h1>
        </div>
    </>
  )
}

export default Home