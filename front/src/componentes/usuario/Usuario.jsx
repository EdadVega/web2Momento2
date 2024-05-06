import React from 'react'
import { Link } from 'react-router-dom'


function Usuario() {
  return (
    <div className='UsuCont'>
       
        <nav className='navHead'>
            
                <Link to="/home">HOME</Link>
                <Link to ="/usuario">USUARIO</Link>
                <Link to ="/">CERRAR SESION</Link>
     
    </nav>

        <div>
        
        </div>
    </div>
  )
}

export default Usuario